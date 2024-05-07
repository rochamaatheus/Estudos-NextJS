import { getAula } from '@/api/cursos';

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({ params }: PageParams) {
  const aula = await getAula(params.curso, params.aula);
  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  );
}
