import { Rect, Anchor, Cylinder } from "react-zdog";
import { TAU, wood } from '../../constants';
import Laptop from './Laptop';
import { Mug } from './Mug';

export default function Table () {
  return (
    <Anchor>
      <Rect
        height={25}
        width={45}
        translate={{ x: 0, y: -TAU * 7.8, z: 20}}
        rotate={{ x: -TAU/4 }}
        fill={true}
        color={wood}
        stroke={2}
      >
        <Cylinder 
          diameter={1.7}
          length={35}
          translate={{ x: 20, y: 10, z: 18 }}
        /> 
        <Cylinder 
          diameter={1.7}
          length={35}
          translate={{ x: 20, y: -10, z: 18 }}
        /> 
          <Cylinder 
          diameter={1.7}
          length={35}
          translate={{ x: -20, y: -10, z: 18 }}
        /> 
          <Cylinder 
          diameter={1.7}
          length={35}
          translate={{ x: -20, y: 10, z: 18 }}
        /> 
        <Mug />
        <Laptop />
      </Rect>
    </Anchor>
  )
}