import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonById = async ({ params, config }: RequestPokemonParams) => {
  const res = await api.get<Pokemon>(`pokemon/${params.id}`, config);
  return res.data;
};
