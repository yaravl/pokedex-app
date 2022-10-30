import React from 'react';
import { useParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';
import { useRequestPokemonQuery } from '@utils/api';

export const PokemonPage: React.FC = () => {
  const params = useParams();

  const { data } = useRequestPokemonQuery({
    params: { id: +(params.pokemonId as string) },
    config: {
      retry: 0,
      cacheTime: 60000,
      staleTime: 10000
    }
  });

  const queryClient = useQueryClient();

  console.log('@@@ cache', queryClient.getQueryData(['pokemons', 3]));

  if (data) {
    console.log('@data', data);
    return <div className='container'>{data.name}</div>;
  }

  return null;
};

// 44:00 https://www.youtube.com/watch?v=7yFfNRQg6rE&t=555s&ab_channel=SIBERIACANCODE%F0%9F%A7%8A-Frontend
