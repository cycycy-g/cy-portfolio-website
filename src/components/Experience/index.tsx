import { Props } from '@/pages/constants';
import Experience from './Experience';

export default function ExperienceContainer({ scrollTo, goToSectionRef }: Props) {
  return (
    <div className="experience-container">
      <Experience />
      <button className="arrow" onClick={() => scrollTo(goToSectionRef)}></button>
    </div>
  )
}