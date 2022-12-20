import type { User } from 'firebase/auth';
import React from 'react';

export type Store = {
  sessions: { isSignIn: boolean };
  user: User;
};
export interface StoreContextProps {
  store: Store;

  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

export const INITIAL_STORE = { sessions: { isSignIn: false }, user: {} as User };

export const StoreContext = React.createContext<StoreContextProps>({
  store: INITIAL_STORE,
  setStore: () => {}
});
