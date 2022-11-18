import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonByIdParams {
  params: { name: string };
  config?: AxiosRequestConfig;
}

export const requestPokemonByName = async ({
  params,
  config
}: RequestPokemonByIdParams): Promise<Pokemon> => {
  const res = await api.get(`pokemon/${params.name}`, config);
  return res.data;
};
