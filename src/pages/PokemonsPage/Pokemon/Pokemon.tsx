import React from 'react';

import { useRequestPokemonQuery } from '../../../utils/api/hooks';

interface PokemonProps {
  pokemon: any;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => (
  // const { data, isLoading, isError } = useRequestPokemonQuery({ id });
  //
  // if (isError) return <h1>Error!</h1>;
  // if (isLoading) return <h1>Loading...</h1>;

  <div className='flex flex-col justify-center rounded p-4 shadow'>
    <img src={pokemon.sprites.front_default} alt='pokemon' />
    <h2 className='text-left text-sm font-semibold capitalize'>{pokemon.name}</h2>
  </div>
);
