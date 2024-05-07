'use server';

import { Produto } from '@/app/produtos/page';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function adicionarProduto(produto: Produto) {
  try {
    const r = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });
    await r.json();
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath('/produtos');
    redirect('/produtos');
  }
}
