import { Anchor, RoundedRect, Cylinder } from "react-zdog";
import { TAU, wood } from '../../constants';

export default function Chair () {
  return (
    <Anchor
      translate={{
        y: -TAU*7 - 1,
        z: -3
      }}
    >
      <RoundedRect
        rotate={{
          x: 20.4
        }}
        width={18}
        height={10}
        fill={true}
        color={wood}
      >
        {/* back rest */}
        <Cylinder 
          diameter={0.1}
          length={3}
          translate={{
            x: 8,
            y: -4,
            z: 2
          }}
        /> 
        <Cylinder 
          diameter={0.1}
          length={3}
          translate={{
            x: -8,
            y: -4,
            z: 2
            }}
        /> 
        <RoundedRect
          rotate={{
            x: 20.4
          }}
          width={18}
          height={10}
          fill={true}
          color={wood}
          translate={{
            y: -4,
            z: 8
          }}
        />
        {/* Legs */}
        <Cylinder 
          diameter={0.4}
          length={31}
          translate={{
            x: 8.5,
            y: -4,
            z: -16
          }}
        /> 
        <Cylinder 
          diameter={0.4}
          length={31}
          translate={{
            x: -8.5,
            y: -4,
            z: -16
          }}
        /> 
        <Cylinder 
          diameter={0.4}
          length={31}
          translate={{
            x: 8.5,
            y: 4,
            z: -16
          }}
        /> 
        <Cylinder 
          diameter={0.4}
          length={31}
          translate={{
            x: -8.5,
            y: 4,
            z: -16
          }}
        /> 
      </RoundedRect>
    </Anchor>
  )
}