import { Anchor } from "react-zdog";

export default function Ground ({ children }) {
  return (
    <Anchor
    translate={{ y: 56 }}
    >
      {children}
    </Anchor>
  )
}