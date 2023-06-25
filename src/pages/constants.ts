import { Inter } from 'next/font/google'
import { MutableRefObject } from 'react';

const inter = Inter({ subsets: ['latin'] })

export type Props = {
  scrollTo: (T:  MutableRefObject<HTMLInputElement | null>) => void,
  goToSectionRef:  MutableRefObject<HTMLInputElement | null>
}

export const mainClassnames = `${inter.className} `;