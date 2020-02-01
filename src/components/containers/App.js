import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PokemonList from "../PokemonList";

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
