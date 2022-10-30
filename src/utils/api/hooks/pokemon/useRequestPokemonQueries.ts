import { useQueries } from '@tanstack/react-query';

import { requestPokemonById } from '../../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
  useQueries({
    queries: Array.from({ length: offset }).map((_el: any, index: number) => {
      const pokemonId = index + 1;
      return {
        queryKey: ['pokemons', pokemonId],
        queryFn: () => requestPokemonById({ params: { id: pokemonId } }),
        staleTime: 60 * 1000 * 5,
        cacheTime: 10000
      };
    })
  });
