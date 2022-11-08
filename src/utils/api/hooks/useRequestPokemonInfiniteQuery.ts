import { AxiosError } from 'axios';

import { useInfiniteQuery } from '@tanstack/react-query';

import { requestPokemons } from '../requests';

export const useRequestPokemonInfiniteQuery = ({
  options = {}
}: UseRequestPokemonInfiniteQueryParams) =>
  useInfiniteQuery<NamedAPIResourceList, AxiosError>(
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
