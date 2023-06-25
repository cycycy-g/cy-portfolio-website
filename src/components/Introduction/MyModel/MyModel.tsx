import { Anchor } from "react-zdog";
import { Body } from './Body';
import Table from './Table/Table';
import Chair from './Chair/Chair';
import Windows from './Window/Window';

export function MyModel () {
  return (
    <Anchor
      translate={{ x: 0, z: 0}}
      onClick={() => console.log("")}
    >
      <Windows />
      <Table />
      <Body />
      <Chair />
    </Anchor>
  )
}