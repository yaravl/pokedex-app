import React from 'react';

import { useRequestPokemonQuery } from '../../utils/api/hooks';

export const PokemonsPage = () => {
  const { data, isLoading, fetchPreviousPage, fetchNextPage } = useRequestPokemonQuery();

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <div>
      <h1>Pokemons Page</h1>
      <div className='flex flex-wrap'>asd</div>
      <button onClick={() => fetchPreviousPage()}>prev</button>
      <button onClick={() => fetchNextPage()}>next</button>
    </div>
  );
};

// TODO: 1:14 https://www.youtube.com/watch?v=23JL1zAKW-U&t=2639s&ab_channel=SIBERIACANCODE%F0%9F%A7%8A-Frontend
