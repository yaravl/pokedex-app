import React from 'react';

export type Store = {
  sessions: { isSignIn: boolean };
};
export interface StoreContextProps {
  store: Store;

  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

export const StoreContext = React.createContext<StoreContextProps>({
  store: { sessions: { isSignIn: false } },
  setStore: () => {}
});
