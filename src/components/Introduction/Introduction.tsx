import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiScala } from "@react-icons/all-files/si/SiScala";
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { useSpring, animated, useTrail } from '@react-spring/web';
import Trail from './Trail';
import Background from './Background';
import { useWindowSize } from "usehooks-ts";

interface Props {
  scrollTo: (T: number) => void;
  goToSectionRef: number;
  goToContactSectionRef: number;
}

export default function Introduction({
  scrollTo,
  goToSectionRef,
  goToContactSectionRef
}: Props) {
  const { width } = useWindowSize();

  const springs = useSpring({
    from: { x: 0 },
    to: { x: width < 575 ? 0 : 100 },
  });

  const trails = useTrail(1, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <div className="section main-bg">
      <Background />
      <div className=" w-11/12 mx-auto flex justify-center sm:justify-between lg:w-full h-full">
        <animated.section
          className="intro-animation"
          style={{ ...springs }}
        >
          <div className="text-zone">
            {trails.map((props, idx) => (
              <animated.h1 key={idx} style={props}>
                Hi!
                <br />
                I&apos;m Cy
              </animated.h1>
            ))}
            <h2>Software Engineer / Frontend Engineer</h2>
          </div>
          <Trail>
            <SiJavascript message="Javascript" />
            <SiTypescript message="Typescript" />
            <SiReact message="React" />
            <SiRedux message="Redux" />
            <SiHtml5 message="HTML5" />
            <SiCss3 message="CSS3" />
          </Trail>
          <Trail>
            <SiScala message="Scala" />
            <SiNodeDotJs message="NodeJs" />
            <SiNextDotJs message="NextJs" />
            <SiPostgresql message="Postgres" />
            <SiMongodb message="MongoDB" />
          </Trail>
          <div className="button hover:bg-secondary-green transition-colors z-10">
            <button
              type='button'
              onClick={() => scrollTo(goToContactSectionRef)}
            >
              CONTACT ME
            </button>
          </div>
        </animated.section>
        <button
          className="arrow"
          onClick={() => scrollTo(goToSectionRef)}
        />
      </div>
    </div>
  )
}
