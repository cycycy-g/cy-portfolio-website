import '@/styles/globals.css'
import '@/styles/styles.css';
import '@/components/Introduction/styles.css';
import '@/components/AboutMe/styles.css';
import '@/components/Contact/styles.css';
import '@/components/Experience/styles.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
