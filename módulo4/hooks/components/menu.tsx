'use client';

import Link from 'next/link';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import React, { Suspense } from 'react';

function Busca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get('busca');
  return <div>Busca: {busca}</div>;
}

export default function Menu() {
  const params = useParams();
  const pathname = usePathname();
  // [CUIDADO] -> import from *'next/navigation'*.
  // Não importar de 'next/router'.
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      // router.push('/');
    }, 5000);
  }, [router]);

  React.useEffect(() => {
    console.log('Roda Mudou!');
  }, [pathname]);

  return (
    <>
      {/* O Next pede que você coloque em um Suspense */}
      {/* Pois é um valor dinâmico */}
      <Suspense fallback={'Carregando...'}>
        <Busca />
      </Suspense>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/acoes">Ações: {params.acao}</Link>
        </li>
      </ul>
    </>
  );
}
