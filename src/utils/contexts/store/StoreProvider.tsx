import { User } from 'firebase/auth';
import React from 'react';

import { useAuthState } from '@utils/firebase';

import { StoreContext, StoreContextProps } from './StoreContext';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { user } = useAuthState();
  const [store, setStore] = React.useState<StoreContextProps['store']>({
    sessions: { isSignIn: false },
    user: {} as User,
    pokemons: { myPokemons: [] }
  });

  React.useEffect(() => {
    if (user) {
      setStore((store) => ({ ...store, sessions: { isSignIn: true }, user }));
    }
  }, [user]);

  const value = React.useMemo(() => ({ store, setStore }), [store]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
