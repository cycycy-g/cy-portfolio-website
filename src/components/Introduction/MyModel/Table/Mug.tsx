import { Ellipse, Anchor, Cylinder } from "react-zdog";
import { TAU } from '../../constants';

export function Mug () {
  return (
    <Anchor 
      translate={{
        x: 15,
        z: -TAU/2,
      }}
      rotate={{
        y: TAU/2
      }}
    >
      <Cylinder
        diameter={4}
        length={4}
        color='#CDC8AF'
      >
        <Ellipse 
          diameter={2}
          quarters={2}
          translate={{
            x: 2.5
          }}
          rotate={{
            x: 1.5
          }}
          color='#CDC8AF'
        />
        <Ellipse 
          diameter={2}
          fill={true}
          translate={{
            z: 1.8
          }}
          color="#6F4E37"
        />
      </Cylinder>
    </Anchor>
  )
}