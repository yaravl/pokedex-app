import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonByName } from '../requests';

export const useRequestPokemonQueryByName = ({
  params,
  options = {}
}: UseRequestPokemonQueryByNameParams) =>
  useQuery<Pokemon, AxiosError>(
    ['pokemon', params.name],
    () =>
      requestPokemonByName({
        params
      }),
    { staleTime: Infinity, cacheTime: Infinity, retry: 1, ...options }
  );
