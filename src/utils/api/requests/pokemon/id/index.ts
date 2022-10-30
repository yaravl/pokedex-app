import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonByIdParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonById = async ({
  params,
  config
}: RequestPokemonByIdParams): Promise<Pokemon> => {
  const res = await api.get(`pokemon/${params.id}`, config);
  return res.data;
};
