import React from 'react';

import { useRequestPokemonQueries } from '../../utils/api/hooks';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const [offset, setOffset] = React.useState(9);
  const result = useRequestPokemonQueries({ offset });

  const isLoading = result.some((el) => el.isLoading);

  React.useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: window.innerHeight });
    }
  }, [isLoading]);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className='container'>
      <h1>Pokemons Page</h1>
      <div className='grid grid-cols-3 gap-4'>
        {result.map((pokemon: any, index: number) => (
          <Pokemon key={index} pokemon={pokemon.data} />
        ))}
      </div>
      <button onClick={() => setOffset(offset + 3)}>load more</button>
    </div>
  );
};
