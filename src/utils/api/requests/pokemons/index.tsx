import { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

interface RequestPokemonsParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig;
}

export const requestPokemons = async ({
  params,
  config
}: RequestPokemonsParams): Promise<NamedAPIResourceList> => {
  const res = await api.get(`pokemon/?limit=${params.limit}&offset=${params.offset}`, config);
  return res.data;
};
