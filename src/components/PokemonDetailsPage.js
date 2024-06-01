import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import PokemonDetails from "./PokemonDetails";
import "../scss/pokeindex.scss";
import styled from "styled-components";
import {ReactComponent as ArrowLeft} from "../assets/ArrowLeft.svg";
import {ReactComponent as ArrowRight} from "../assets/ArrowRight.svg";

// styled-components

const Prevbtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: -16px;
`;
const Nextbtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: -16px;
`;

const PokemonDetailsPage = () => {
  const {id} = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(parseInt(id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${currentIndex}`
        );
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${currentIndex}`
        );
        const koreanName = speciesResponse.data.names.find(
          (name) => name.language.name === "ko"
        );

        const typesWithKoreanNames = await Promise.all(
          response.data.types.map(async (type) => {
            try {
              const typeResponse = await axios.get(type.type.url);
              const koreanTypeName = typeResponse.data.names.find(
                (name) => name.language.name === "ko"
              ).name;
              return {
                ...type,
                type: {...type.type, korean_name: koreanTypeName},
              };
            } catch (error) {
              console.error("Error fetching type data:", error);
              return type;
            }
          })
        );

        const abilitiesWithKoreanNames = await Promise.all(
          response.data.abilities.map(async (ability) => {
            try {
              const abilityResponse = await axios.get(ability.ability.url);
              const koreanAbilityName = abilityResponse.data.names.find(
                (name) => name.language.name === "ko"
              ).name;
              return {
                ...ability,
                ability: {...ability.ability, korean_name: koreanAbilityName},
              };
            } catch (error) {
              console.error("Error fetching ability data:", error);
              return ability;
            }
          })
        );

        const movesWithKoreanNames = await Promise.all(
          response.data.moves.map(async (move) => {
            try {
              const moveResponse = await axios.get(move.move.url);
              const koreanMoveName = moveResponse.data.names.find(
                (name) => name.language.name === "ko"
              ).name;
              return {
                ...move,
                move: {...move.move, korean_name: koreanMoveName},
              };
            } catch (error) {
              console.error("Error fetching move data:", error);
              return move;
            }
          })
        );

        setPokemonData({
          ...response.data,
          korean_name: koreanName.name,
          types: typesWithKoreanNames,
          abilities: abilitiesWithKoreanNames,
          moves: movesWithKoreanNames,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentIndex]);

  const goToPreviousPokemon = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextPokemon = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg">
      <div className="DetailPage">
        <div className="DetailPage_arr">
          <Prevbtn onClick={goToPreviousPokemon}>
            <ArrowLeft width="36px" height="36px" />
          </Prevbtn>
          <Nextbtn onClick={goToNextPokemon}>
            <ArrowRight width="36px" height="36px" />
          </Nextbtn>
        </div>
        {pokemonData && <PokemonDetails pokemon={pokemonData} />}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
