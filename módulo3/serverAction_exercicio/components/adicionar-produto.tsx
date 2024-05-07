'use client';

import { adicionarProduto } from '@/actions/adicionar-produto';
import { Produto } from '@/app/produtos/page';

export default function AdicionarProduto() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;
    const data: Produto = {
      nome: target.nome.value,
      preco: Number(target.preco.value),
      descricao: target.descricao.value,
      estoque: Number(target.estoque.value),
      importado: target.importado.checked ? 1 : 0,
    };
    await adicionarProduto(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" />
      <label htmlFor="preco">Preço</label>
      <input type="number" name="preco" id="preco" />
      <label htmlFor="descricao">Descrição</label>
      <input type="text" name="descricao" id="descricao" />
      <label htmlFor="estoque">Estoque</label>
      <input type="number" name="estoque" id="estoque" />
      <label htmlFor="importado">
        <input type="checkbox" name="importado" id="importado" />
        Importado
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}
