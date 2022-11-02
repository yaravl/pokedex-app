import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonById } from '../requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({
  params,
  options
}: RequestQueryParams<UseRequestPokemonQueryParams, Pokemon, AxiosError>) =>
  useQuery<Pokemon, AxiosError>(
    ['pokemon', params.id],
    () =>
      requestPokemonById({
        params
      }),
    { ...options }
  );
