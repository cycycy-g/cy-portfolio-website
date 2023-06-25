import { Shape, RoundedRect } from "react-zdog";
import { white } from '../../constants';

export default function Cloud ({ translate }) {
  return (
    <Shape
      stroke={1.1}
      color={white}
      translate={translate}
    >
      <Shape
        stroke={0.8}
        color={white}
        translate={{
          x: -0.8,
          y: 0.4,
          z: 0.4
        }}
      />
      <Shape
        stroke={1}
        color={white}
        translate={{
          x: 0.8,
          y: 0.5,
          z: 0.6
        }}
      />
      <RoundedRect
        width={1.2}
        height={0.001}
        translate={{
          x: -0.6,
          y: 0.7,
          z: 0.4
        }}
        stroke={0.8}
        color={white}
        fill={true}
      />
      <RoundedRect
        width={1.2}
        height={0.001}
        translate={{
          x: 0.6,
          y: 0.9,
          z: 0.8
        }}
        stroke={0.8}
        color={white}
        fill={true}
      />
    </Shape>
  )
}