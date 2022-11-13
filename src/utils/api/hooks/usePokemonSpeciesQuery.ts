import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { requestPokemonSpecies } from '../requests/pokemon-species/id';

export const usePokemonSpeciesQuery = ({ id, options = {} }: UsePokemonSpeciesQuery) =>
  useQuery<PokemonSpecies, AxiosError>(
    ['pokemon-species', id],
    () => requestPokemonSpecies({ params: { id } }),
    {
      ...options
    }
  );
