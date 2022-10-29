import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonFormByIdParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonFormById = async ({ params, config }: RequestPokemonFormByIdParams) => {
  const res = await api.get<Pokemon>(`evolution-chain/${params.id}`, config);
  return res.data;
};
