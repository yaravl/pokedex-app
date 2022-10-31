import React from 'react';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { requestPokemonById, requestPokemons } from '../../requests';

import { useRequestPokemonQuery } from './useReauestPokemonQuery';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset = 0 }: UseRequestPokemonQueriesParams) =>
  useInfiniteQuery(
    ['pokemon`s'],
    ({ pageParam = 0 }) => requestPokemons({ params: { limit: 9, offset: pageParam } }),
    {
      retry: 0,
      getNextPageParam: (lastPage, allPages) => allPages.length * 9
    }
  );
