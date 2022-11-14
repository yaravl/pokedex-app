import { AxiosError } from 'axios';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { requestPokemonEvolutionChain } from '../requests';

interface UseRequestPokemonEvolutionChainQuery {
  id: number;
  options?: Omit<UseQueryOptions<EvolutionChain, AxiosError>, 'queryKey' | 'queryFn'>;
}

export const useRequestPokemonEvolutionChainQuery = ({
  id,
  options = {}
}: UseRequestPokemonEvolutionChainQuery) =>
  useQuery<EvolutionChain, AxiosError>(
    ['evolution-chain', id],
    () => requestPokemonEvolutionChain({ params: { id } }),
    {
      ...options
    }
  );
