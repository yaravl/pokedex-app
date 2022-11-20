import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonAbilityByIdParams {
  params: { name: string };
  config?: AxiosRequestConfig;
}

export const requestPokemonAbilityById = async ({
  params,
  config
}: RequestPokemonAbilityByIdParams) => {
  const res = await api.get<PokemonAbility>(`ability/${params.name}`, config);
  return res.data;
};
