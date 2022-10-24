import { useQuery } from '@tanstack/react-query';

import { requestPokemonById } from '../../requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery(['pokemon', id], () =>
    requestPokemonById({
      params: { id }
    })
  );
