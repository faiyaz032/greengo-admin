import { NextResponse } from 'next/server';
import { prismaAdmin } from '@/lib/prisma/adminClient';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ email: string }> }
) {
  try {
    const { email: encodedEmail } = await params;
    const email = decodeURIComponent(encodedEmail);
    const user = await prismaAdmin.adminUserView.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
