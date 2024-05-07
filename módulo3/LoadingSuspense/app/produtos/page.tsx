import ProdutosLista from '@/components/produtos-lista';
import { Suspense } from 'react';

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <p>Essa aqui é a lista de produtos:</p>
      <Suspense fallback={'Carregando...'}>
        <ProdutosLista />
      </Suspense>
    </main>
  );
}
