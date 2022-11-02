import React from 'react';

import { useRequestPokemonInfiniteQuery } from '@utils/api';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const {
    data: dataPages,
    isError,
    isLoading,
    fetchNextPage
  } = useRequestPokemonInfiniteQuery({
    options: {
      staleTime: 50000,
      cacheTime: 50000
    }
  });

  if (isError) {
    return <h1>ERROR</h1>;
  }
  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  const pokemons = dataPages.pages.reduce(
    (arr: NamedAPIResource[], page) => [...arr, ...page.results],
    []
  );

  console.log(`data pages@@@`, pokemons);

  return (
    <div className='container '>
      <h1>Pokemons Page</h1>
      <button className='mr-2 border-2  p-2' onClick={() => console.log('prev')}>
        PREV PAGE
      </button>
      <button className='border-2 p-2' onClick={() => fetchNextPage()}>
        NEXT PAGE
      </button>
      <div className='grid grid-cols-3 gap-4 '>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => {
            if (pokemon.name) {
              const pokemonId = pokemon.url
                .slice(1, -1)
                .split('/')
                .filter((el) => Number(el))
                .join('');

              return <Pokemon key={pokemonId} pokemon={pokemonId} />;
            }
            return 'Pokemon not found!';
          })}
      </div>
      <button onClick={() => fetchNextPage()}>load more</button>
    </div>
  );
};
