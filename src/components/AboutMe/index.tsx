import { Props } from '@/pages/constants';
import AboutMe from './AboutMe';

export default function AboutMeContainer({ scrollTo, goToSectionRef }: Props) {
  return (
    <div className="about-me-container">
      <AboutMe />
      <button className="arrow" onClick={() => scrollTo(goToSectionRef)}></button>
    </div>
  )
}