import React, { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import { GlobalStyle } from "../../styles/styles";
import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <GlobalStyle />
            <div className="container">
                <Navbar searchChange={searchChange} />
                <PokemonList searchTerm={searchTerm} />
            </div>
        </>
    );
};

export default App;
