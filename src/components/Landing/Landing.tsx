import { MutableRefObject, useRef } from 'react'
import Introduction from '../Introduction/Introduction'
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

export default function Landing () {
  const section2 = useRef<HTMLInputElement | null>(null);
  const section3 = useRef<HTMLInputElement | null>(null);
  const section4 = useRef<HTMLInputElement | null>(null);

  const scrollTo = (section: MutableRefObject<HTMLInputElement | null>) => {
    section.current?.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <div className="container-section remove-scroll">
      <Introduction scrollTo={scrollTo} goToSectionRef={section2} />
      <div ref={section2} />
      <AboutMe scrollTo={scrollTo} goToSectionRef={section3} />
      <div ref={section3} />
      <Experience scrollTo={scrollTo} goToSectionRef={section4} />
      <div ref={section4} />
      <Contact />
    </div>
  )
}