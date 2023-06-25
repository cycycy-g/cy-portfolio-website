import { Shape } from "react-zdog";
import { TAU, beigeDark, beigeLight, quarterTurn, skinDark, skinMedium } from '../constants';
import { Shoulder } from './Shoulder';
import { Thigh } from './Thigh';
import Head from './Head';

export function Body () {
  const hipX = ( 8 / quarterTurn ) / 3;
  const torsoX = 2 / quarterTurn;
  const shoulderX = torsoX + 1.5;


  return (
    // hips
    <Shape
      path={[
        { x: -hipX },
        { x: hipX }
      ]}
      translate={{ y: -49 }}
      stroke={8}
      color={beigeLight}
    >
    {/* Torso */}
      <Shape
        path={[
          { x: -torsoX },
          { x: torsoX },
          { y: -2.5 }
        ]}
        translate={{ y: -8 }}
        stroke={10}
        color="#FFF"
      >
        {/* Shoulder */}
        <Shoulder 
          color={"#c1c1c1"} 
          translate={{ x: -shoulderX, y: -3 }} 
          rotate={{  z: TAU/8, x: 0.5 }}
          armTranslate={{ y: 10 }}
          armRotate={{ x: -TAU/4, z: TAU/1.6 }}
          skin={skinDark}
          interval={450}
          isRight={true}
        />
        <Shoulder 
          color={"#FFF"} 
          translate={{ x: shoulderX, y: -3 }} 
          rotate={{  z: -TAU/8, x: 0.5 }}
          armTranslate={{ y: 10 }}
          armRotate={{ x: -TAU/4, z: -TAU/1.6 }}
          skin={skinMedium}
          interval={550}
          isRight={false}
        />

        {/* Neck */}
        <Shape
          path={[ {}, { y: -2 }]}
          translate={{ y: -7 }}
          stroke={3}
          color={skinMedium}
        >
          {/* Head */}
          <Head />
        </Shape>
      </Shape>
    {/* Thigh */}
    <Thigh 
      color={beigeDark}
      colorAnkle={skinMedium}
      thighTranslate={{ x: -hipX}}
      isRight={true}
    />
    <Thigh 
      color={beigeLight}
      colorAnkle={skinMedium}
      thighTranslate={{ x: 4}}
      isRight={false}
    />
    </Shape>
  )
}