import { Props } from '@/pages/constants';
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
import Me from './Me';

const h1Styles = "text-9xl mb-20";

export default function Introduction ({ scrollTo, goToSectionRef }: Props) {
  return (
    <div className="section bg-primary-green">
      <section className="flex items-center w-5/12 h-2/6 flex-col">
        <h1 className={h1Styles}>
          Cyryll Galon
        </h1>
        <div className="flex text-5xl w-2/4 justify-between mb-10">
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiRedux />
          <SiHtml5 />
          <SiCss3 />
        </div>
        <div className="flex text-5xl w-2/4 justify-between mb-10">
          <SiScala />
          <SiNodeDotJs />
          <SiNextDotJs />
          <SiPostgresql />
          <SiMongodb />
        </div>
      </section>
      <Me />

      <button className="arrow" onClick={() => scrollTo(goToSectionRef)}></button>
    </div>
  )
}