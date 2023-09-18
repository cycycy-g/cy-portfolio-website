// import Image from 'next/image';
// import layer1 from "./assets/BG_0001_Layer-1.png";
// import layer1Trees from "./assets/BG_0000_Layer1Tree.png";
// import layer2 from "./assets/BG_0003_Layer-2.png";
// import layer2Trees from "./assets/BG_0002_Layer2Tree.png";
// import layer3 from './assets/BG_0005_Layer-3.png';
// import layer3Trees from "./assets/BG_0004_Layer3Tree.png";
// import layer4 from "./assets/BG_0007_Layer-4.png";
// import layer4Trees from "./assets/BG_0006_Layer4Tree.png";
// import layer5 from "./assets/BG_0008_Layer-5.png";
// import layer6 from "./assets/BG_0009_Layer-6.png";
// import layer7 from "./assets/BG_0010_Layer-7.png";
// import clouds from "./assets/BG_0011_Clouds.png";
import { ParallaxLayer } from '@react-spring/parallax';

const imageClassnames = "animation-layer parallax"

const style = (url: string) => ({
  backgroundImage: `url(${url})`,
})

export default function Background() {
  return (
    <>
      <ParallaxLayer
        speed={-0.01}
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/BG_0011_Clouds.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        speed={-0.06}
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/BG_0010_Layer-7.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        speed={-0.08}
        offset={0}

      >
        <div className={imageClassnames} style={style('/assets/BG_0009_Layer-6.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        speed={-0.10}
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/BG_0008_Layer-5.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        speed={-0.15}
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/BG_0006_Layer4Tree.png')} />
        <div className={imageClassnames} style={style('/assets/BG_0007_Layer-4.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        speed={-0.05}
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/BG_0004_Layer3Tree.png')} />
        <div className={imageClassnames} style={style('/assets/BG_0005_Layer-3.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.04}
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/BG_0002_Layer2Tree.png')} />
        <div className={imageClassnames} style={style('/assets/BG_0003_Layer-2.png')} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
      >
        <div className={imageClassnames} style={style('/assets/Layer1Tree.png')} />
      </ParallaxLayer>
    </>
  )
}