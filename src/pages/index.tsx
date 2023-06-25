import Landing from '@/components/Landing/Landing'
import { mainClassnames } from './constants'

export default function Home() {
  return (
    <main
      className={mainClassnames}
    >
      <Landing />
    </main>
  )
}
