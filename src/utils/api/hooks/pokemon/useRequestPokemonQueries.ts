import { useInfiniteQuery } from '@tanstack/react-query';

import { requestPokemons } from '../../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset = 0 }: UseRequestPokemonQueriesParams) =>
  useInfiniteQuery(
    ['pokemon`s'],
    ({ pageParam = offset }) => requestPokemons({ params: { limit: 9, offset: pageParam } }),
    {
      retry: 0,
      staleTime: 500000,
      getNextPageParam: (lastPage, allPages) => allPages.length * 9
    }
  );
