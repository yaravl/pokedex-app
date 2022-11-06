import { useInfiniteQuery } from '@tanstack/react-query';
import { UseInfiniteQueryOptions } from '@tanstack/react-query/src/types';

import { requestPokemons } from '../requests';

interface UseRequestPokemonInfiniteQueryParams {
  options?: Omit<UseInfiniteQueryOptions<NamedAPIResourceList, Error>, 'queryKey' | 'queryFn'>;
}

export const useRequestPokemonInfiniteQuery = ({
  options = {}
}: UseRequestPokemonInfiniteQueryParams) =>
  useInfiniteQuery<NamedAPIResourceList, Error>(
    ['pokemon`s'],
    ({ pageParam = 0 }) =>
      requestPokemons({
        params: { limit: 9, offset: pageParam }
      }),
    {
      ...options,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.next
          ? lastPage.next.split('?')[1].split('&')[0].split('=')[1]
          : null;

        if (!nextPage) return false;

        return +nextPage ?? null;
      },
      refetchOnWindowFocus: false
    }
  );
