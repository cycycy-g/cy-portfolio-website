import { Props } from '@/pages/constants'

const styles = "section bg-primary-green"

export default function Experience ({ scrollTo, goToSectionRef }: Props) {
  return (
    <div className={styles}>
      <h1>Experience</h1>
      <button className="arrow" onClick={() => scrollTo(goToSectionRef)}></button>
    </div>
  )
}