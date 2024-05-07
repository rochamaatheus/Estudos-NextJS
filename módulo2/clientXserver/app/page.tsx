import Acesso from '@/components/acesso';
import Width from '@/components/width';

// Desabilitar pré-renderização
// import dynamic from 'next/dynamic';
// const Width = dynamic(() => import('@/components/width', {ssr: false}));

export default async function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
      <Acesso />
    </main>
  );
}
