import { AxiosError } from 'axios';

import { useQueries, UseQueryResult } from '@tanstack/react-query';

import { requestPokemonAbilityById } from '../requests';

interface UseRequestPokemonAbilitiesQueryParams {
  abilities: number[];
}

export const useRequestPokemonAbilitiesQuery = ({
  abilities
}: UseRequestPokemonAbilitiesQueryParams): UseQueryResult<Ability, AxiosError>[] => {
  const queries = [
    ...Array.from({ length: abilities.length }).map((_, index) => {
      const id = abilities[index];

      return {
        queryKey: [`pokemon-ability${id}`, id],
        queryFn: () => requestPokemonAbilityById({ params: { id } }),
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 1
      };
    })
  ];

  return useQueries({ queries }) as UseQueryResult<Ability, AxiosError>[];
};
