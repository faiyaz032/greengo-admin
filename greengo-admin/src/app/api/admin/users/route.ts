import { NextResponse } from 'next/server';
import { prismaAdmin } from '@/lib/prisma/adminClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  const search = searchParams.get('search') || '';
  const app = searchParams.get('app') || 'all';

  const skip = (page - 1) * limit;

  try {
    let where: any = search 
      ? { email: { contains: search, mode: 'insensitive' as any } } 
      : {};

    if (app === 'square') {
      where.squareDonationsUsers = { not: [] };
    } else if (app === 'quote') {
      where.quotePluginUsers = { not: [] };
    } else if (app === 'wishlist') {
      where.wishlistFlowUsers = { not: [] };
    }

    const [users, total] = await Promise.all([
      prismaAdmin.adminUserView.findMany({
        where,
        select: {
          email: true,
          summary: true,
          lastSyncedAt: true,
          squareDonationsUsers: true,
          quotePluginUsers: true,
          wishlistFlowUsers: true,
        },
        skip,
        take: limit,
        orderBy: { earliestJoinedAt: 'desc' },
      }),
      prismaAdmin.adminUserView.count({ where }),
    ]);

    return NextResponse.json({
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
