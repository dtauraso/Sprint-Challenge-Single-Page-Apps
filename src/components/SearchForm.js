import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
export default function SearchForm() {
//  3
// search filter
// 
  const [searchTerm, setSearchTerm] = useState("")
  const [matchCards, setMatchCards] = useState([])
  useEffect(() => {
    // console.log("got here")
    // morty smith
    Axios .get("https://rickandmortyapi.com/api/character")
          .then(response => {
            console.log(response.data.results)
            const characters = response.data.results
            const results = characters.filter(character =>
              character.name.toLowerCase().includes(searchTerm.toLowerCase()))
            console.log(results, "size", results.length)
            // if(results.length === 1) {
            //   setMatchCard(results[0])
            // }
            setMatchCards(results)
          })
          .catch(error => {
            console.log("error", error)
          })
  }, [searchTerm])

  // triggers useEffect
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  
  return (
    <div>
      <section className="search-form">
     {/* // Add a search form here */}
     <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
        <label htmlFor="name"> Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"

          // part 2
          value={searchTerm}

          // part 1
          onChange={handleChange}
          />
     </form>
    </section>
    
    {/* // character card here */}
    {/* {displayResult(matchCard)} */}
    {matchCards.map(card => {
      return (

      <CharacterCard key={card.id} character={card} />
      )
    })}
    </div>
    
  );
}
