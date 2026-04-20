import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;
    const adminSecret = process.env.ADMIN_SECRET;

    if (!token || token !== adminSecret) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Protect /api/admin routes
  if (
    pathname.startsWith('/api/admin') &&
    pathname !== '/api/admin/login' &&
    pathname !== '/api/admin/sync'  // ← allow Vercel cron
  ) {
    const adminSecret = process.env.ADMIN_SECRET;
    
    const cookieToken = request.cookies.get('admin_token')?.value;
    
    const authHeader = request.headers.get('authorization');
    const headerToken = authHeader?.startsWith('Bearer ') 
      ? authHeader.substring(7) 
      : request.headers.get('ADMIN_SECRET');

    const token = cookieToken || headerToken;

    if (!token || token !== adminSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};