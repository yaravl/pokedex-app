import { AxiosError } from 'axios';

import { useQueries, UseQueryResult } from '@tanstack/react-query';

import { requestPokemonAbilityById } from '../requests';

interface UseRequestPokemonAbilitiesQueryParams {
  abilities: string[];
}

export const useRequestPokemonAbilitiesQuery = ({
  abilities
}: UseRequestPokemonAbilitiesQueryParams): UseQueryResult<Ability, AxiosError>[] => {
  const queries = [
    ...Array.from({ length: abilities.length }).map((_, index) => {
      const name = abilities[index];

      return {
        queryKey: [`pokemon-ability`, name],
        queryFn: () => requestPokemonAbilityById({ params: { name } }),
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 1
      };
    })
  ];

  return useQueries({ queries }) as UseQueryResult<Ability, AxiosError>[];
};
