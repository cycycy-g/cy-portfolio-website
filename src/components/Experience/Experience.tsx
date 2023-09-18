import Stripe from './Stripe';

const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="experiences">
        <div className="experience-title">          
          <h2>
            Gemini
          </h2>
          <span>Sep 2021 - Current</span>
        </div>
          <span>Software Engineer</span>
      </div>
      <Stripe />
    </div>
  )
}

export default function Experience () {
  return (
    <div className="experience-section">
      <div className="experience-subtitle">
        <h4>Experience</h4>
      </div>
      <Stripe />
       <Experiences />
       <Experiences />
       <Experiences />
    </div>
  )
}