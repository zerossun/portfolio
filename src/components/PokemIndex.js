import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../scss/pokeindex.scss";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";

// styled-components

const Number = styled.p`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 300;
  color: #999;
`;
const Name = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// api code

const pokemonPerPage = 5;
const totalPokemon = 120;

const PokemIndex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const start = pokemonData.length;
    const end = start + pokemonPerPage;

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${start}`
      );

      const allPokemonData = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          const speciesResponse = await axios.get(
            pokemonResponse.data.species.url
          );

          const koreanName = speciesResponse.data.names.find(
            (name) => name.language.name === "ko"
          );

          return {
            id: pokemonResponse.data.id,
            korean_name: koreanName ? koreanName.name : pokemon.name,
            sprites: pokemonResponse.data.sprites,
          };
        })
      );

      setPokemonData([...pokemonData, ...allPokemonData]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  return (
    <div>
      <InfiniteScroll
        pageStart={1}
        hasMore={totalPokemon > pokemonData.length}
        loadMore={fetchData}
        loader={<h4 key={0}>Loading...</h4>}
        className="infiniteScroll"
        initialLoad={true}
      >
        <ul>
          {pokemonData.map((pokemon) => (
            <li key={pokemon.id} className="pokemon">
              <Link to={`/pokemon/${pokemon.id}`}>
                <div className="pokemon_img">
                  <div className="pokemon_img_div">
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.korean_name}
                    />
                  </div>
                </div>
                <div className="Txt">
                  <Number>No: {pokemon.id}</Number>
                  <Name>{pokemon.korean_name}</Name>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PokemIndex;
