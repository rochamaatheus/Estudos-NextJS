import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // nova rota
  if (request.nextUrl.pathname.startsWith('/entrar')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // verifica se tem o token e se está tentando entrar em /conta
  const token = request.cookies.get('token')?.value;
  if (!token && request.nextUrl.pathname.startsWith('/conta')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Configurações do middleware
export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

// Regex para matcher:
/*
// rota /cursos
['/cursos']
// rota /cursos e /login
['/cursos', '/login']
// todas as rotas que começam com /cursos
['/cursos/:path*']
// todas as rotas que começam com /
['/(.*)'] ou ['/:path*']
// todas as rotas que não começam com /api, /_next, /static, /public, /favicon.ico
['/((?!api|_next|static|public|favicon.ico).*)']

{
  source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
  // ignora se for prefetch
  missing: [
    { type: 'header', key: 'next-router-prefetch' },
    { type: 'header', key: 'purpose', value: 'prefetch' },
  ],
},
*/
