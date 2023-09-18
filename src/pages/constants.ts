import { Inter } from 'next/font/google'
import { MutableRefObject } from 'react';

const inter = Inter({ subsets: ['latin'] })

export type Props = {
  scrollTo: (T: number) => void,
  goToSectionRef:  number,
}

export const mainClassnames = `${inter.className} `;