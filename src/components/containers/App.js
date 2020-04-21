import React from "react";
import PokemonList from "../PokemonList";
import { GlobalStyle } from "../../styles/styles";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <PokemonList />
      </div>
    </>
  );
};

export default App;
