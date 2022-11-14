import { AxiosError, AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonEvolutionChain {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonEvolutionChain = async ({
  params,
  config
}: RequestPokemonEvolutionChain): Promise<EvolutionChain> => {
  const res = await api.get(`evolution-chain/${params.id}`, { ...config });
  return res.data;
};
