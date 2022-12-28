import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';

import { database, useAuthState } from '@utils/firebase';

import { StoreContext, StoreContextProps } from './StoreContext';

interface StoreProviderProps {
  children: React.ReactNode;
}

const updateStore = async (userId: string) => {
  const docRef = doc(database, 'users', userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UsersCollections;
  }

  return {} as UsersCollections;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { user } = useAuthState();
  const [store, setStore] = React.useState<StoreContextProps['store']>({
    sessions: { isSignIn: false },
    user: {} as User,
    data: { myPokemons: [] }
  });

  React.useEffect(() => {
    if (user) {
      setStore((store) => ({ ...store, sessions: { isSignIn: true }, user }));
      updateStore(user.uid).then((data) => setStore((store) => ({ ...store, data })));
    }
  }, [user]);

  const value = React.useMemo(() => ({ store, setStore }), [store]);

  console.log(`@@@store`, store);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
