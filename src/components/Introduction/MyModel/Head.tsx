import { Anchor, Hemisphere, Ellipse, Shape }  from "react-zdog";
import { TAU, midnight, skinDark, skinMedium } from '../constants';

export default function Head () {
  const neckY = -TAU/7;

  return (
    // Chin
    <Shape
      translate={{ y: neckY - 5 }}  
      stroke={8}
      color={skinMedium}
      rotate={{ x: -0.5 }}
    >
      {/* Hair */}
      <Shape 
        path={[
          { y: -1 },
          { y: -5 },
        ]}
        translate={{ x: -2, y: -2, z: -3 }}
        stroke={2}
      />
      <Shape 
        path={[
          { y: -2 },
          { y: -5 }
        ]}
        translate={{ x: 0, y: -3, z: -3}}
        stroke={2}
      />
      <Shape
        path={[
          { y: 0 },
          { y: -6 }
        ]}
        translate={{ x: 1.25, y: -2, z: -3 }}
        stroke={1.5}
      />
      <Ellipse
        diameter={2}
        translate={{ y: -4, z: -3}}
        stroke={2}
      />
      {/* Forehead */}
      <Ellipse
        diameter={2}
        translate={{ y: -3 }}
        stroke={4}
        color={skinMedium}
      >
        <Ellipse 
          diameter={3}
          quarters={1}
          translate={{ y: 1, z: 4 }}
          rotate={{ z: TAU * 3/8 }}
          color={skinDark}
          closed={false}
          stroke={0.5}
        />
        <Ellipse 
          diameter={1.2}
          translate={{ x: 1.2, z: 2, y: -0.5 }}
          stroke={false}
          color={"603"}
          fill={true}
        />
        <Ellipse 
          diameter={1.2}
          translate={{ x: -1.2, z: 2, y: -0.5 }}
          stroke={false}
          color={"603"}
          fill={true}
        />
      </Ellipse>
    </Shape>
  )
}