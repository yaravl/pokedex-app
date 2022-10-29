import { useQuery } from '@tanstack/react-query';

import { requestPokemonById } from '../../requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = (params: UseRequestPokemonQueryParams) =>
  useQuery(['pokemon', params.id], () =>
    requestPokemonById({
      params
    })
  );
