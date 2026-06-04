import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { secret } = await request.json();
    const adminSecret = process.env.ADMIN_SECRET;

    const trimmedSecret = secret?.trim();
    const trimmedAdminSecret = adminSecret?.trim();

    if (trimmedSecret === trimmedAdminSecret && trimmedAdminSecret) {
      const cookieStore = await cookies();
      cookieStore.set('admin_token', trimmedAdminSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
