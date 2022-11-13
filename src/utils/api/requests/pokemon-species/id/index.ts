import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonSpecies {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonSpecies = async ({
  params,
  config
}: RequestPokemonSpecies): Promise<PokemonSpecies> => {
  const res = await api.get<PokemonSpecies>(`pokemon-species/${params.id}`, config);
  return res.data;
};
