import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonById } from '../../requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({
  params,
  config
}: RequestQueryParams<UseRequestPokemonQueryParams, Pokemon, AxiosError>) =>
  useQuery<Pokemon, AxiosError>(
    ['pokemon', params.id],
    () =>
      requestPokemonById({
        params
      }),
    { ...config }
  );
