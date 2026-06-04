import { NextResponse } from 'next/server';
import { prismaAdmin } from '@/lib/prisma/adminClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  const search = searchParams.get('search') || '';
  const source = searchParams.get('source') || 'all';

  const skip = (page - 1) * limit;

  try {
    const where: any = {};

    // Filter by search query (across name, email, message)
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Filter by source application/platform
    if (source && source !== 'all') {
      where.source = { equals: source, mode: 'insensitive' };
    }

    const [messages, total] = await Promise.all([
      prismaAdmin.contactMessage.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prismaAdmin.contactMessage.count({ where }),
    ]);

    return NextResponse.json({
      messages,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('[API Admin Contacts Error]:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
