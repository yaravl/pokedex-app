import { useInfiniteQuery } from '@tanstack/react-query';

import { requestPokemon } from '../../requests';

export const useRequestPokemonQuery = () =>
  useInfiniteQuery<any>(
    ['pokemon'],
    ({ pageParam = 20 }) => {
      console.log('@@@', pageParam);
      return requestPokemon({ params: { limit: 20, offset: (pageParam += pageParam) } });
    },
    {
      getNextPageParam: (lastPage) => lastPage.next ?? undefined,
      getPreviousPageParam: (firstPage) => firstPage.previous ?? undefined
    }
  );
