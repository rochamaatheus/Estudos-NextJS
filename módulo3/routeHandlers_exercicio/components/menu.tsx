import { cookies } from 'next/headers';
import Link from 'next/link';

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default async function Menu() {
  let conta: Conta = {
    autorizado: false,
    usuario: '',
  };

  const token = cookies().get('token')?.value;
  const r = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (r.ok) {
    conta = (await r.json()) as Conta;
  }

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {conta.autorizado ? conta.usuario : <Link href="/login">Login</Link>}
      </li>
    </ul>
  );
}
