import { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

interface RequestPokemonByIdParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig;
}

export const requestPokemons = async ({
  params,
  config
}: RequestPokemonByIdParams): Promise<NamedAPIResourceList> => {
  const res = await api.get(`pokemon/?limit=${params.limit}&offset=${params.offset}`, config);
  return res.data;
};
