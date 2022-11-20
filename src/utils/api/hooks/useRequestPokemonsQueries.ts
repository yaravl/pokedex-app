import { useQueries } from '@tanstack/react-query';

import { requestPokemon } from '../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonsQueries = ({ offset = 0 }: UseRequestPokemonQueriesParams) =>
  useQueries({
    queries: [
      ...Array.from({ length: offset }).map((query, index) => ({
        queryKey: ['pokemon', index + 1],
        queryFn: () => requestPokemon({ params: { name: index + 1 } }),
        staleTime: Infinity,
        cacheTime: Infinity,
        retry: 1
      }))
    ]
  });
