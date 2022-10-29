import { useQuery } from '@tanstack/react-query';

import { requestPokemonFormById } from '../../../requests';

interface UseRequestPokemonFormQueryParams {
  id: number;
  config?: any;
}

export const useRequestPokemonFormQuery = ({ id, config }: UseRequestPokemonFormQueryParams) =>
  useQuery(
    ['pokemon-form', id],
    () =>
      requestPokemonFormById({
        params: { id }
      }),
    config
  );
