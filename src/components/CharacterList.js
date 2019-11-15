import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard"
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    Axios .get("https://rickandmortyapi.com/api/character")
          .then(response => {
            console.log(response.data.results)
            setCharacters(response.data.results)
          })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    // 2
    // home link (/)
    // search link(/search)

    <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}
