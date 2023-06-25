import { Anchor, Rect, RoundedRect, Group, Shape, useRender } from "react-zdog";
import { TAU } from '../../constants';

export default function Laptop () {

  return (
    <Anchor>
      {/* Keyboard */}
      <Rect
        height={10}
        width={15}
        translate={{ x: 0, y: 2, z: -1.4 }}
        color={"#666666"}
        fill={true}
        stroke={2}
      />
      <Rect 
        height={10}
        width={15}
        color={"#666666"}
        fill={true}
        stroke={2}
        translate={{ y: -5, z: -6 }}
        rotate={{ x: 20 }}
      >
        <RoundedRect
          height={8}
          width={13}
          fill={true}
          stroke={0.5}
          cornerRadius={1}
          translate={{ z: -1 }}
        />
      </Rect>
    </Anchor>
  )
}