import { useTrail, a } from '@react-spring/web';
import React, { ReactNode } from 'react';
import { useWindowSize } from "usehooks-ts";

type Props = {
  children: ReactNode;
}

export default function Trail({ children }: Props) {
  const items = React.Children.toArray(children);
  const { width } = useWindowSize();


  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    from: { opacity: 0, x: width < 575 ? 0 : 20, height: 0 },
    height: "auto",
  })

  return (
    <div className="trail-container">
      {trail.map(({ ...style }, index) => (
        <a.div
          key={index}
          style={style}
          className="hover:text-complimentary-color transition-colors group relative"
        >
          {items[index]}
          <span className="absolute top-0 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            {items[index].props.message}
          </span>
        </a.div>
      ))}
    </div>
  )
}