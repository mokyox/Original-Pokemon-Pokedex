import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PokemonContainer from "./components/PokemonContainer";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <PokemonContainer />
        </div>
      </div>
    );
  }
}

export default App;
