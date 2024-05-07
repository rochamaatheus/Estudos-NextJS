'use client';

import React from 'react';

type Produto = {
  nome: string;
  id: number;
};

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const r = await fetch('https://api.origamid.online/produtos');
      const json = await r.json();
      setData(json);
    }
    fetchData();
  });
  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
