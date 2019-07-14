import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PokemonContainer from "./components/PokemonContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PokemonContainer />
        </div>
      </div>
    );
  }
}

export default App;
