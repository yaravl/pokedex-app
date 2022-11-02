import { useQueries } from '@tanstack/react-query';

import { requestPokemons } from '../../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonsQueries = ({ offset = 0 }: UseRequestPokemonQueriesParams) =>
  useQueries({
    queries: [
      {
        queryKey: ['pokemon', 1],
        queryFn: () => requestPokemons({ params: { limit: 9, offset } }),
        staleTime: 50000
      }
    ]
  });
