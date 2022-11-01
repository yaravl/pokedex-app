import { useInfiniteQuery } from '@tanstack/react-query';

import { requestPokemons } from '../../requests';

export const useRequestPokemonInfiniteQuery = () =>
  useInfiniteQuery(
    ['pokemon`s'],
    ({ pageParam = 0 }) =>
      requestPokemons({
        params: { limit: 9, offset: pageParam }
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.next
          ? lastPage.next.split('?')[1].split('&')[0].split('=')[1]
          : null;

        if (!nextPage) return null;

        return +nextPage ?? null;
      },
      refetchOnWindowFocus: false
    }
  );
