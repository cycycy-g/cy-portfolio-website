import { Shape } from "react-zdog";
import { beigeLight, quarterTurn } from '../constants';
import Shoes from './Shoes';

export function Thigh ({ color, colorAnkle, thighTranslate, isRight }) {
  const hipX = ( 8 / quarterTurn ) / 3;
  const shinEnd = { y: 12 };

  return (
    // Thigh
    <Shape
      path={[
        { y: 0 },
        { y: 12 }
      ]}
      translate={thighTranslate}
      rotate={{ x: 1 }}
      stroke={5}
      color={color}
    >
      {/* Shin */}
      <Shape
        path={[
          { y: 0 },
          shinEnd
        ]}
        translate={{ y: 13 }}
        rotate={{ x: -1.2 }}
        stroke={5}
        color={color}
      >
        <Shape 
          path={[
            { y: 1 },
            { y: 4 }
          ]}
          color={colorAnkle}
          translate={shinEnd}
          stroke={4}
        >
          <Shoes isRight={isRight} />
        </Shape>
      </Shape>
    </Shape>
  )
}