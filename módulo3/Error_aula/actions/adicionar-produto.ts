'use server';

import { Produto } from '@/app/produtos/page';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function validateNome(nome: unknown) {
  return typeof nome === 'string' && nome.length > 1;
}
function validatePreco(preco: unknown) {
  return typeof preco === 'number' && preco > 1;
}

export async function adicionarProduto(
  state: { errors: string[] },
  formData: FormData,
) {
  const produto: Produto = {
    nome: formData.get('nome') as string,
    descricao: formData.get('descricao') as string,
    preco: Number(formData.get('preco')) as number,
    estoque: Number(formData.get('estoque')) as number,
    importado: formData.get('importado') ? 1 : 0,
  };
  let errors = [];
  if (!validateNome(produto.nome)) errors.push('Nome Inválido');
  if (!validatePreco(produto.preco)) errors.push('Preço Inválido');
  if (errors.length > 0) return { errors };
  try {
    const r = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });
    if (!r.ok) throw new Error('Erro ao adicionar o produto');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  revalidatePath('/produtos');
  redirect('/produtos');
  // return { errors: [] };
}
