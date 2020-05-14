import React, { useState } from "react";
import Head from "next/head";
import PokemonList from "../src/components/PokemonList/PokemonList";
import Navbar from "../src/components/Navbar/Navbar";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Head>
                <title>151 Pokemon Pokedex</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Navbar searchChange={searchChange} />
            <PokemonList searchTerm={searchTerm} />
        </>
    );
};

export default App;
