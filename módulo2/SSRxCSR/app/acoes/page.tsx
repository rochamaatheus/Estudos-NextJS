// SERVER SIDE
// export default async function AcoesPage() {
//   // Atualizar API (não em tempo real)
//   /*const r = await fetch('https://api.origamid.online/acoes/lua',
//     next: {
//       revalidate: 5,
//     }
//   );*/
//   const r = await fetch('https://api.origamid.online/acoes/lua');
//   const acao = (await r.json()) as { simbolo: string; atualizada: string };

//   return (
//     <main>
//       <h1>{acao.simbolo}</h1>
//       <h2>{acao.atualizada}</h2>
//     </main>
//   );
// }

//CLIENT SIDE
'use client';

import React from 'react';

type Acoes = {
  simbolo: string;
  atualizada: string;
};

export default function AcoesPage() {
  const [data, setData] = React.useState<Acoes | null>();

  React.useEffect(() => {
    fetch('https://api.origamid.online/acoes/lua')
      .then((r) => r.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return null;
  return (
    <main>
      <h1>{data.simbolo}</h1>
      <h2>{data.atualizada}</h2>
    </main>
  );
}
