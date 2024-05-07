type Produto = {
  id: number;
  nome: string;
};

export default async function ServerFetch() {
  const r = await fetch('https://api.origamid.online/produtos');
  const data = (await r.json()) as Produto[];
  // Console do Servidor
  // console.log(data);
  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
