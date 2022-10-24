import { useQuery } from '@tanstack/react-query';

import { requestPokemonId } from '../../requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery<any>(['pokemon', id], () =>
    requestPokemonId({
      params: { id }
    })
  );
