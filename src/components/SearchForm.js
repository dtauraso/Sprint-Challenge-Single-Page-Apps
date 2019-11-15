import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function SearchForm() {
//  3
// search filter
// 
  const [searchTerm, setSearchTerm] = useState("")
  const [matchCard, setMatchCard] = useState({})
  useEffect(() => {
    // console.log("got here")
    Axios .get("https://rickandmortyapi.com/api/character")
          .then(response => {
            console.log(response.data.results)
          })
          .catch(error => {
            console.log("error", error)
          })
  }, [searchTerm])
  return (
    <section className="search-form">
     // Add a search form here
    </section>
    // character card here
  );
}
