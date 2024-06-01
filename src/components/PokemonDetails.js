import React from "react";
import styled from "styled-components";

// styled-components

const DetailTop = styled.div`
  width: 40%;
  margin: 0 auto;
`;
const DetailBottom = styled.div`
  width: 60%;
`;
const Span = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: #999;
`;
const Name = styled.h3`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
`;

const PokemonDetails = ({pokemon}) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <span key={type.type.name}>
        {type.type.korean_name}
        {index < pokemon.types.length - 1 ? ", " : ""}
      </span>
    ));
  };

  const renderAbilities = () => {
    return pokemon.abilities.map((ability, index) => (
      <span key={ability.ability.name}>
        {ability.ability.korean_name}
        {index < pokemon.abilities.length - 1 ? ", " : ""}
      </span>
    ));
  };

  const renderMoves = () => {
    return pokemon.moves.map((move) => (
      <li key={move.move.name}>{move.move.korean_name}</li>
    ));
  };

  return (
    <div className="Detail">
      <DetailTop>
        <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
      </DetailTop>
      <DetailBottom>
        <Span>No.{pokemon.id}</Span>
        <Name>{pokemon.korean_name}</Name>
        <table className="table">
          <tbody>
            <tr>
              <th>
                <h4>키</h4>
              </th>
              <th>
                <h4>무게</h4>
              </th>
            </tr>
            <tr>
              <td>
                <p>{pokemon.height}</p>
              </td>
              <td>
                <p>{pokemon.weight}</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <h4>속성</h4>
              </th>
              <th>
                <h4>특성</h4>
              </th>
            </tr>
            <tr>
              <td>
                <p>{renderTypes()}</p>
              </td>
              <td>
                <p>{renderAbilities()}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailBottom>
    </div>
  );
};

export default PokemonDetails;
