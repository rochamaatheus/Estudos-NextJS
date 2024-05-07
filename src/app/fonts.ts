import { Roboto } from 'next/font/google';
// Para usar fontes locais:
// import {  } from 'next/font/local';

// Configurações de fonte
export const font_body = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  // estilo de caracter
  subsets: ['latin'],
  // mostrar fonte de backup
  display: 'swap',
  variable: '--font-body',
});
