import { Props } from '@/pages/constants'

const styles = `section bg-white text-black`

export default function AboutMe ({ scrollTo, goToSectionRef }: Props) {
  return (
    <div className={styles}>
      <h1>About Me</h1>
      <button className="border-black arrow" onClick={() => scrollTo(goToSectionRef)}></button>
    </div>
  )
}