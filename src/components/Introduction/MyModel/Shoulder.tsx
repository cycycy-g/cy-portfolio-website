import { Shape } from "react-zdog";
import { useEffect, useState } from 'react';
import { a, useSpring } from "@react-spring/zdog";
import { TAU } from '../constants';

export function Shoulder ({ 
  color, 
  translate, 
  rotate,
  armTranslate,
  armRotate,
  skin,
  interval,
  isRight
}) {
  const [typing, setTyping] = useState(true)

  useEffect(() => void setInterval(() => setTyping(previous => !previous), interval), [])
  const { z } = useSpring({ z: typing ? armRotate.z :  isRight ? TAU/4 : -TAU/4 })

  return (
    <Shape 
      path={[
        { y: 0 },
        { y: 9}
      ]}
      translate={translate}
      rotate={rotate}
      stroke={4}
      color={color}
    >
      {/* Arm */}
      <a.Shape
        path={[
          { y: 0 },
          { y: 10}
        ]}
        translate={armTranslate}
        rotate={z.to(r => ({ ...armRotate, z: isRight ? TAU/5-r : -TAU/5-r}))}
        stroke={4}
        color={skin}
      > 
        {/* Hand */}
        <Shape 
          translate={{ x: -0.5, y: 12, z: 0 }}
          stroke={5}
          color={skin}
        />
      </a.Shape>
  </Shape>
 )
}