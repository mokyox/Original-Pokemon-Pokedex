import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PokemonContainer from "../PokemonContainer";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <PokemonContainer />
      </div>
    </div>
  );
};

export default App;
