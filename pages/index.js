import React, { useState } from "react";
import PokemonList from "../src/components/PokemonList/PokemonList";
import { GlobalStyle, Container } from "../src/styles/global/";
import Navbar from "../src/components/Navbar/Navbar";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar searchChange={searchChange} />
            <Container>
                <PokemonList searchTerm={searchTerm} />
            </Container>
        </>
    );
};

export default App;
