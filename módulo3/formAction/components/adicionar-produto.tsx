'use client';

import { adicionarProduto } from '@/actions/adicionar-produto';
import { useFormState, useFormStatus } from 'react-dom';
// import { Produto } from '@/app/produtos/page';

function Button() {
  // status.pending -> Enviando ?
  // status.data -> Dados
  // status.method -> Método de Envio
  // status.acion -> Ação do botão
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

export default function AdicionarProduto() {
  const [state, formAction] = useFormState(adicionarProduto, {
    errors: [],
  });
  console.log(state);
  return (
    <form action={formAction}>
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
      {state.errors.map((error, i) => (
        <p key={i} style={{ color: 'red' }}>
          {error}
        </p>
      ))}
      {/* Evita as pessoas de ficarem clicando para enviar */}
      <Button />
    </form>
  );
}
