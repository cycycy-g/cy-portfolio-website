import { Anchor, Rect, Shape } from "react-zdog";
import { TAU, wood, sky, beigeLight } from '../../constants';
import Cloud from './Cloud';

export default function Windows () {
  return (
    <Anchor
      translate={{
        z: -90,
        x: -20,
        y: -TAU * 11
      }}
    >
      <Rect
        color={wood}
        width={20}
        height={20}
        fill={true}
      >
        {/* Windows */}
        <Rect
          color={sky}
          translate={{
            z: 0.5,
            x: 5
          }}
          height={18}
          width={8}
          fill={true}
        />
        <Rect
          color={sky}
          translate={{
            z: 0.5,
            x: -5
          }}
          height={18}
          width={8}
          fill={true}
        >
          {/* Sun and clouds */}
          <Cloud 
            translate={{
              y: -6
            }}
          />
          <Cloud 
            translate={{
              y: -5,
              x: -2
            }}
          />
           <Cloud 
            translate={{
              y: -4.5,
              x: 1
            }}
          />
          <Shape 
            stroke={2}
            color={beigeLight}
            translate={{
              x: 2,
              y: -7
            }}
          />
        </Rect>
      </Rect>
    </Anchor>
  )
}