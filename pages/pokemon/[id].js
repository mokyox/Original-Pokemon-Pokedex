import Head from "next/head";
import pokedex from "../../src/data/pokedex";
import descriptions from "../../src/data/descriptions";
import abilities from "../../src/data/abilities";
import Pokemon from "../../src/components/Pokemon/Pokemon";

export default function Pokemons({ pokemonData }) {
  const description = descriptions;
  const ability = abilities.map((ability) => {
    return ability.map((ability) => ability.ability.name).join(" / ");
  });

  return (
    <>
      <Head>
        <title>{pokemonData.name.english}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Pokemon
        id={pokemonData.id}
        name={pokemonData.name.english}
        stats={pokemonData.base}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png?raw=true`}
        type={pokemonData.type}
        description={description[pokemonData.id - 1]}
        ability={ability[pokemonData.id - 1]}
      />
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
