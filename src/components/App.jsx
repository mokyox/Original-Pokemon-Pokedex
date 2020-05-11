import React, { useState } from "react";
import PokemonList from "./PokemonList/PokemonList";
import { GlobalStyle, Container } from "../styles/global/index";
import Navbar from "./Navbar/Navbar";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Navbar searchChange={searchChange} />
                <PokemonList searchTerm={searchTerm} />
            </Container>
        </>
    );
};

export default App;
