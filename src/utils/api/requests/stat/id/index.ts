import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestStatById = async ({ params, config }: RequestPokemonParams) => {
  const res = await api.get<PokemonStat>(`stat/${params.id}`, config);
  return res.data;
};
