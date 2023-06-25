import { useEffect, useState } from 'react';
import { Illustration }  from "react-zdog";
import Scene from './MyModel/Scene';
import Ground from './MyModel/Ground';
import { MyModel } from './MyModel/MyModel';

export default function Me () {
  const [zoom, setZoom] = useState(0);
  const [rotate, setRotate] = useState(true)

  useEffect(() => {
    var illoSize = 128;
    var minWindowSize = Math.min( window.innerWidth - 20, (window.innerHeight - 60) );
    var zoomSize = Math.floor( minWindowSize / illoSize );
    setZoom(zoomSize)
  },[]);

  return (
    <Illustration 
      zoom={zoom}
      dragRotate={true}
      onDragStart={() => setRotate(false)}
      onDragEnd={() => setRotate(true)}
      >
      <Scene 
        rotate={rotate}
      >
        <Ground>
          <MyModel />
        </Ground>
      </Scene>
    </Illustration>
  );
}