import { useQuery } from '@tanstack/react-query';

import { requestStatById } from '../requests';

interface UseRequestStatQueryParams {
  id: number;
}

export const useRequestPokemonStatQuery = ({ id }: UseRequestStatQueryParams) =>
  useQuery(['stat', id], () =>
    requestStatById({
      params: { id }
    })
  );
