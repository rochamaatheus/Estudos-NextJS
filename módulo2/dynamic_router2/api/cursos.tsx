type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  tempo: number;
  curso_id: number;
  ordem: number;
};

export async function getCursos() {
  const r = await fetch('https://api.origamid.online/cursos');
  return (await r.json()) as Curso[];
}

export async function getCurso(curso: string) {
  const r = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return (await r.json()) as Curso & {
    aulas: Aula[];
  };
}

export async function getAula(curso: string, aula: string) {
  const r = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
  return (await r.json()) as Aula;
}
