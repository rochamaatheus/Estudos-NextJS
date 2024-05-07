import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';
import { font_body } from './fonts';

export const metadata: Metadata = {
  title: 'Origamid Next',
  description: 'Criado por Origamid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Para utilizar a variável no css, passa: */}
      {/* font_body.variable em className */}
      <body className={font_body.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
