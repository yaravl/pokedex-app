import React from 'react';

import { getCookie } from '@utils/helpers';

import { StoreContext, StoreContextProps } from './StoreContext';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [store, setStore] = React.useState<StoreContextProps['store']>({
    sessions: { isSignIn: !!getCookie('POKEMONS-AUTH') }
  });

  const value = React.useMemo(() => ({ store, setStore }), [store]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
