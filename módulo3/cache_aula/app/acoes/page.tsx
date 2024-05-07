import Atualizar from '@/components/atualizar';

type Acao = {
  id: number;
  preco_anterior: number;
  preco: number;
  simbolo: string;
  nome: string;
  descricao: string;
  vendas: number;
  atualizada: string;
};

export default async function AcoesPage() {
  const r = await fetch('https://api.origamid.online/acoes/lua', {
    // cache: 'no-store',
    next: {
      // revalidate: 5,
      tags: ['acoes'],
    },
  });
  const acao = (await r.json()) as Acao;
  return (
    <main>
      <h1>Acoes</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  );
}
