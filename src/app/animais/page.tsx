import Image from 'next/image';
import styles from './animais.module.css';

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimaisPage() {
  const r = await fetch('https://api.origamid.online/animais');
  const animais = (await r.json()) as Animal[];
  return (
    <main>
      {/* Para imagens locais, criar uma pasta em "public" */}
      <h1>Animais</h1>
      <ul className={styles.animais}>
        {animais.map((animal, i) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              width={2400}
              height={1600}
              src={animal.imagem}
              alt={animal.descricao}
              // Padrão
              quality={75}
              // Recomendado por padrão
              // sizes="100vw"
              // Em caso de media query
              sizes="(max-width: 600) 100vw, 50vw"
              // Abaixo de 600 -> 100vw
              // Acima -> 50vw

              // Definindo para dar prioridade
              // para os 2 primeiros itens
              priority={i < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
