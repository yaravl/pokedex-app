import { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

interface RequestPokemonParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig;
}

export const requestPokemon = async ({ params, config }: RequestPokemonParams) => {
  const res = await api.get(`pokemon/?limit=${params.limit}&offset=${params.offset}`, config);
  return res.data;
};
