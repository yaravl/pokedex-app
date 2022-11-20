import { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

interface RequestPokemonParams {
  params: { name: Pokemon['name'] | Pokemon['id'] };
  config?: AxiosRequestConfig;
}

export const requestPokemon = async ({
  params,
  config
}: RequestPokemonParams): Promise<Pokemon> => {
  const res = await api.get(`pokemon/${params.name}`, config);
  return res.data;
};
