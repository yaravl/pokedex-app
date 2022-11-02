import React from 'react';

import { useRequestPokemonQuery } from '@utils/api';

interface PokemonProps {
  pokemon: any;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  const { data, isLoading, isError } = useRequestPokemonQuery({
    params: { id: pokemon },
    options: { staleTime: 50000 }
  });

  if (isError) return <h1>Error!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className='flex flex-col justify-center rounded p-4 shadow'>
      <img src={data?.sprites.front_default || ''} alt='pokemon' />
      <h2 className='text-left text-sm font-semibold capitalize'>{data.name}</h2>
    </div>
  );
};
