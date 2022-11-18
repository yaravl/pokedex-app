import { useQueries, UseQueryResult } from '@tanstack/react-query';

import { requestPokemonById } from '../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonsQueries = ({ offset = 0 }: UseRequestPokemonQueriesParams) =>
  useQueries({
    queries: [
      ...Array.from({ length: offset }).map((query, index) => ({
        queryKey: ['pokemon', index + 1],
        queryFn: () => requestPokemonById({ params: { id: index + 1 } }),
        staleTime: Infinity,
        cacheTime: Infinity,
        retry: 1
      }))
    ]
  });
