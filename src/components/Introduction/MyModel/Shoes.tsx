import { RoundedRect, Group, Shape } from "react-zdog";
import { TAU, blueDark, offWhite, white } from '../constants';

export default function Shoes ({ isRight }) {
  var shoeAngleX = TAU/20;

  return (
    <RoundedRect
      width={1.2}
      height={4}
      cornerRadius={2}
      translate={{ y: 7, z: 2,  }}
      rotate={{ x: -TAU/4 - shoeAngleX }}
      color={isRight ? white : offWhite}
      fill={true}
      stroke={6}
    >
      {/* Laces */}
      <Shape
        path={[
          { x: -1 },
          { x: 1 }
        ]}
        scale={{ x: 2 }}
        translate={{ y: -2, z: -3 }}
        color={blueDark}
        stroke={1}
      >
      </Shape>
      <Shape
        path={[
          { x: -1 },
          { x: 1 }
        ]}
        scale={{ x: 2 }}
        translate={{ y: 0, z: -3 }}
        color={blueDark}
        stroke={1}
      />
      <Shape 
        visible={false}
        translate={{ y: -3 }}
      />
      {/* Soles */}
      <RoundedRect
        width={4}
        height={7}
        cornerRadius={3}
        translate={{ z: 3.5 }}
        stroke={1}
        fill={true}
        color={blueDark}
      />
    </RoundedRect>
  )
}