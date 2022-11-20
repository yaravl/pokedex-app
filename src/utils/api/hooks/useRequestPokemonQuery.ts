import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemon } from '../requests';

export const useRequestPokemonQuery = ({ params, options = {} }: UseRequestPokemonQuery) =>
  useQuery<Pokemon, AxiosError>(
    ['pokemon', params.name],
    () =>
      requestPokemon({
        params
      }),
    { staleTime: Infinity, cacheTime: Infinity, retry: 1, ...options }
  );
