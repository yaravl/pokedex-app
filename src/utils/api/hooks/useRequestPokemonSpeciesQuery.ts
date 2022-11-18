import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonSpecies } from '../requests/pokemon-species/id';

export const useRequestPokemonSpeciesQuery = ({ id, options = {} }: UsePokemonSpeciesQuery) =>
  useQuery<PokemonSpecies, AxiosError>(
    ['pokemon-species', id],
    () => requestPokemonSpecies({ params: { id } }),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: 1,
      refetchInterval: false,
      ...options
    }
  );
