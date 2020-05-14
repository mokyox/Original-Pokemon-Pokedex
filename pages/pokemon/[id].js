/* eslint-disable react/prop-types */
import Link from "next/link";
import pokedex from "../../src/data/pokedex";
import Pokemon from "../../src/components/Pokemon/Pokemon";

export default function Pokemons({ pokemonData }) {
    const pokemonName = pokemonData.name.english;
    const pokemonNumber = pokemonData.id;

    return (
        <>
            <Pokemon pokemonName={pokemonName} pokemonNumber={pokemonNumber} />
            <Link href="/">
                <a>Go home</a>
            </Link>
        </>
    );
}

export async function getStaticPaths() {
    const paths = pokedex.map((pokemon) => {
        return {
            params: { id: String(pokemon.id) },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const pokemonData = pokedex.find((pokemon) => {
        return pokemon.id.toString() === params.id;
    });

    return {
        props: {
            pokemonData,
        },
    };
}
