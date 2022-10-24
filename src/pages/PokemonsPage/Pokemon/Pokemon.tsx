import React from 'react';

import { useRequestPokemonQuery } from '../../../utils/api/hooks';

interface PokemonProps {
  id: number;
}

export const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useRequestPokemonQuery({ id });

  if (isError) return <h1>Error!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  console.log('@data', data);
  return (
    <div className='rounded p-4 shadow'>
      <h2 className='text-left text-sm font-semibold capitalize'>
        {data.name}
      </h2>
    </div>
  );
};
