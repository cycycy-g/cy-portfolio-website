import Image from 'next/image';
import texts from "./aboutMe.json";
import me from "./assets/GH010013_1613850563439.jpg";
import Stripe from '../Experience/Stripe';

export default function AboutMe() {
  return (
    <>
      <div className="width-container about-me">
        <div className='about-me-title'>
          <h1>Hello there! <br /> I&apos;m <span>Cyryll Galon</span>,</h1>
          <h2>a passionate and dedicated <span>Software Engineer</span></h2>
        </div>
        <div className="about-me-heading">
          <div className="picture" style={{
            backgroundImage: "url(/assets/me.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "60%"
          }} />
          <p className="paragraph">{texts.paragraph1}</p>
        </div>
      </div>
      <div className="width-container about-me-2">
        <h2>About me</h2>
        <Stripe />
        <p>{texts.paragraph2}</p>
        <p>{texts.paragraph3}</p>
      </div>
    </>
  )
}