import { useRef } from 'react'
import Introduction from '../Introduction/Introduction'
import Contact from '../Contact/Contact';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import AboutMeContainer from '../AboutMe';
import ExperienceContainer from '../Experience';

export default function Landing() {
  const parallax = useRef<IParallax>(null);

  const scrollTo = (section: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(section);
    }
  }

  return (
    <div className="container-section remove-scroll">
      <Parallax
        pages={4}
        ref={parallax}
        style={{ top: 0, left: 0 }}
        className="animation"
      >
        <ParallaxLayer>
          <Introduction scrollTo={scrollTo} goToSectionRef={1} goToContactSectionRef={3} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
        >
          <AboutMeContainer scrollTo={scrollTo} goToSectionRef={2} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
        >
          <ExperienceContainer scrollTo={scrollTo} goToSectionRef={3} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}