import React from "react";
import { useQuery } from "@tanstack/react-query";

export const PokemonsPage = () => {
  const { data } = useQuery(["getPokemons"], () =>
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => res.json())
  );

  console.log(data);
  return (
    <div>
      <h1>Pokemons Page</h1>
      <div>name: {data.name}</div>
      <div>
        <img className="mx-auto" src={data.sprites.front_default} alt="" />
      </div>
    </div>
  );
};
