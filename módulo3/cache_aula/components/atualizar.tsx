'use client';

import {
  revalidatePathAction,
  revalidateTagAction,
} from '@/actions/revalidate-path';

export default function Atualizar() {
  function handleClick() {
    // revalidatePathAction('/acoes');
    revalidateTagAction('acoes');
  }
  return <button onClick={handleClick}>Atualizar</button>;
}
