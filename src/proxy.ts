import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://wishlistflow.com',
  'https://www.quoteplugin.com',
  'https://upsellgrow.com',
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get('origin') || '';

  // Handle CORS for public contact API
  if (pathname === '/api/contact') {
    const isAllowed = ALLOWED_ORIGINS.includes(origin);

    if (request.method === 'OPTIONS') {
      const response = new NextResponse(null, { status: 204 });
      if (isAllowed) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        response.headers.set('Access-Control-Max-Age', '86400');
      }
      return response;
    }

    const response = NextResponse.next();
    if (isAllowed) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
    return response;
  }

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
    pathname !== '/api/admin/login'
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
  matcher: ['/admin/:path*', '/api/admin/:path*', '/api/contact'],
};
