import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonByIdParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonById = async ({ params, config }: RequestPokemonByIdParams) => {
  const res = await api.get<Pokemon>(`pokemon/${params.id}`, config);
  return res.data;
};
