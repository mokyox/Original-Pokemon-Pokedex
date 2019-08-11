import React, { Component } from "react";
import PokemonDisplaylist from "./PokemonDisplaylist";

class PokemonContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <PokemonDisplaylist />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonContainer;
