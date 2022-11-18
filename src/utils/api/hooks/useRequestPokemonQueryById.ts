import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonById } from '../requests';

export const useRequestPokemonQueryById = ({
  params,
  options = {}
}: UseRequestPokemonQueryByIdParams) =>
  useQuery<Pokemon, AxiosError>(
    ['pokemon', params.id],
    () =>
      requestPokemonById({
        params
      }),
    { staleTime: Infinity, cacheTime: Infinity, retry: 1, ...options }
  );
