import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonId = async ({
  params,
  config
}: RequestPokemonParams) => {
  const res = await api.get(`pokemon/${params.id}`, config);
  return res.data;
};
