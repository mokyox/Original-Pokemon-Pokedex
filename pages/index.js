// export default function Home() {
//     return (
//         <div className="container">
//             Hello. This is my Next.js app.
//             <h1>I'm going to try my best to learn this thing.</h1>
//         </div>
//     );
// }

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
            <Container>
                <Navbar searchChange={searchChange} />
                <PokemonList searchTerm={searchTerm} />
            </Container>
        </>
    );
};

export default App;
