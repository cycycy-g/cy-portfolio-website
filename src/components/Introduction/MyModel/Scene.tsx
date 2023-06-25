import { useRef } from 'react'
import { Anchor } from 'react-zdog'

export default function Scene({ children, rotate }) {
  const scene = useRef<any>()
  return <Anchor ref={scene}>{children}</Anchor>
}