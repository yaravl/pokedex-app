import React from 'react';

import { Store, StoreContext } from './StoreContext';

export const useStore = () => {
  const { setStore, ...store } = React.useContext(StoreContext);
  return {
    setStore: (data: Partial<Store>) => setStore({ ...store.store, ...data }),
    ...store.store
  };
};
