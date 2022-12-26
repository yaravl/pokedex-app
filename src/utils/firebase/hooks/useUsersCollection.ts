import { doc, getDoc } from 'firebase/firestore';
import React from 'react';

import type { DocumentData } from '@firebase/firestore';

import { database } from '../instance';

export const useUsersCollection = (userId: string, pokemons: string[]) => {
  const [userData, setUserData] = React.useState<DocumentData>();

  React.useEffect(() => {
    const unsub = async () => {
      const docRef = doc(database, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      }
      return undefined;
    };

    unsub().then((data) => {
      if (data && data?.pokemons?.myPokemons !== pokemons) {
        setUserData((prevState) => ({ ...prevState, ...data }));
        // console.log(userData);
      }
    });
  }, []);

  return { userData };
};

// TODO: Подумать, как можно уменьшьить кол-во запросов
