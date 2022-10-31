import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRequestPokemonQueries, useRequestPokemonQuery } from '@utils/api';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const {
    data: dataPages,
    isError,
    isLoading,
    fetchNextPage
  } = useRequestPokemonQueries({ offset: 0 });

  if (isError) {
    return <h1>LOADING or ERROR</h1>;
  }
  if (isLoading) {
    return <h1>LOADING or ERROR</h1>;
  }

  console.log('@@@@@@@@@@@@@@@@', dataPages?.pages);

  return (
    <div className='container '>
      <h1>Pokemons Page</h1>
      <button onClick={() => fetchNextPage()}>load pokemons</button>
      <div className='grid grid-cols-3 gap-4 '>
        {dataPages?.pages[dataPages?.pages.length - 1 || 0].results.map(
          (pokemon: any, index: number) => {
            if (pokemon.name) {
              const pokemonId = pokemon.url
                .slice(1, -1)
                .split('/')
                .filter((el: any[]) => Number(el))
                .join('');

              return <Pokemon key={pokemonId} pokemon={pokemonId} />;
            }
            return 'Pokemon not found!';
          }
        )}
      </div>
      <button onClick={() => console.log(2222)}>load more</button>
    </div>
  );
};

// 1:19 https://www.youtube.com/watch?v=7yFfNRQg6rE&t=2643s&ab_channel=SIBERIACANCODE%F0%9F%A7%8A-Frontend
