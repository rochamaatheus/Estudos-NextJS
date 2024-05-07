import { cookies } from 'next/headers';
export async function GET() {
  const token = cookies().get('token');
  // Perfil
  const r = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token?.value,
    },
  });
  if (!r.ok) {
    return Response.json({ error: 'Erro na API' });
  }
  const data = await r.json();

  return Response.json(data);
}
