import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET() {
  // Array de vendas
  // const r = await fetch('https://api.origamid.online/vendas', {
  //   headers: {
  //     apikey: 'ORIGAMID123456',
  //   },
  // });
  // const vendas = await r.json();

  // Conta login
  const r = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog',
    }),
  });
  if (!r.ok) {
    return Response.json({ error: 'Erro na API' });
  }
  const data = await r.json();
  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json(data);
}

export async function POST(request: NextRequest) {
  // const params = request.nextUrl.searchParams.get('busca');
  const body = await request.json();
  return Response.json({ body });
}
