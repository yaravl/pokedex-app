import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonById } from '../requests';

export const useRequestPokemonQuery = ({ params, options = {} }: UseRequestPokemonQueryParams) =>
  useQuery<Pokemon, AxiosError>(
    ['pokemon', params.id],
    () =>
      requestPokemonById({
        params
      }),
    { ...options }
  );
