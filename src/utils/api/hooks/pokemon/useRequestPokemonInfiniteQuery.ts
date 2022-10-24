import { useInfiniteQuery } from '@tanstack/react-query';

import { requestPokemon } from '../../requests';

export const useRequestPokemonInfiniteQuery = () =>
  useInfiniteQuery<any>(
    ['pokemon'],
    ({ pageParam = 0 }) =>
      requestPokemon({
        params: { limit: 20, offset: pageParam }
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.next
          .split('?')[1]
          .split('&')[0]
          .split('=')[1];

        return +nextPage ?? null;
      },
      refetchOnWindowFocus: false
    }
  );
