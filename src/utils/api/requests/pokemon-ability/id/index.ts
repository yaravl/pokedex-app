import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonAbilityByIdParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonAbilityById = async ({
  params,
  config
}: RequestPokemonAbilityByIdParams) => {
  const res = await api.get<PokemonAbility>(`ability/${params.id}`, config);
  return res.data;
};
