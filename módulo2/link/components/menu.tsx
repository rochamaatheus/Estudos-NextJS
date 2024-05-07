import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        {/* PREFETCH={TRUE} = PADRÃO */}
        <Link href="/">Home</Link>
      </li>
      <li>
        {/* CASO TENHA ALGUM "#" ELE NÃO PULA */}
        <Link href="/sobre" scroll={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/contato">Contato</Link>
      </li>
    </ul>
  );
}
