import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestItemByName {
  params: { name: string };
  config?: AxiosRequestConfig;
}

export const requestItemByName = async ({ params, config }: RequestItemByName) => {
  const res = await api.get(`item/${params.name}`, { ...config });
  return res.data;
};
