import fs from 'fs/promises';

export default async function Acesso() {
  // Adicionar algo no arquivo
  // Nome, Conteúdo, Charset
  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');

  // Ler arquivo
  const data = fs.readFile('acesso.txt', 'utf8');

  return <div>{data}</div>;
}
