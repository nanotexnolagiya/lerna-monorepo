import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let theme = String(request.cookies.get('theme')?.value || 'light');
  const response = NextResponse.next();
  response.cookies.set('theme', theme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 10 * 365,
  });
  return response;
}
