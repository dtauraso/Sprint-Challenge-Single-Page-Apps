import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
// import CharacterCard from "./components/CharacterCard";
export default function App() {
  // routes go here
  return (
    <main>
      <Header />
      {/* // 1 */}
      {/* link to welcome */}
      <Link to="/" >Welcome </Link>
      <Link to="/characters" >Characters  </Link>
      <Link to="/search" >Search</Link>

      {/* link to search  */}
      <Route exact path="/" component={WelcomePage} />
      <Route path="/search"  component={SearchForm} />
      <Route path="/characters" component={CharacterList} />
      {/* <Route exact path="/characters/:characterID"
        render={(props) => <CharacterCard {...props} >} */}
      {/* <CharacterList /> */}
    </main>
  );
}
