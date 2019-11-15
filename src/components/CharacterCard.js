import React from "react";
import styled from "styled-components"

const Character = styled.div`

  border: 1px solid black;
  padding: 10px;

`
export default function CharacterCard(props)  {
  console.log(props)
  return (
    <Character>
      <span>Name: {props.character.name}</span>
      <p>Alive, Dead, Or Unknown: {props.character.status}</p>
      <p>Species: {props.character.species}</p>

    </Character>
  );
}
