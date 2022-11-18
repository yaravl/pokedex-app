import { AxiosError } from 'axios';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { requestItemByName } from '../requests';

interface UseRequestItemQuery {
  item: string;
  options?: Omit<UseQueryOptions<Item, AxiosError>, 'queryFn' | 'queryKey'>;
}

export const useRequestItemQuery = ({ item, options }: UseRequestItemQuery) =>
  useQuery<Item, AxiosError>(['item', item], () => requestItemByName({ params: { name: item } }), {
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: 1,
    ...options
  });
