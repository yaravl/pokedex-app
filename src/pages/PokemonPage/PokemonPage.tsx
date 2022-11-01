import React from 'react';
import { useParams } from 'react-router-dom';

import { useRequestPokemonQuery } from '@utils/api';

export const PokemonPage: React.FC = () => {
  const params = useParams();

  const { data } = useRequestPokemonQuery({
    params: { id: +(params.pokemonId as string) },
    config: {
      retry: 0,
      cacheTime: 60000,
      staleTime: 10000,
      initialData: () => ({ name: 'buba' })
    }
  });

  if (data) {
    return <div className='container'>{data.name}</div>;
  }

  return null;
};
