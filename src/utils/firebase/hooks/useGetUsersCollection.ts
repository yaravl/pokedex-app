import { doc, getDoc } from 'firebase/firestore';
import React from 'react';

import type { DocumentData } from '@firebase/firestore';

import { database } from '../instance';

export const useGetUsersCollection = (userId: string) => {
  const [userData, setUserData] = React.useState<DocumentData>();
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@', userId);

  const unsub = React.useCallback(async () => {
    const docRef = doc(database, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return undefined;
  }, [userId]);

  React.useEffect(() => {
    unsub()
      .then((data) => {
        if (data) {
          setUserData((prevState) => ({ ...prevState, ...data }));
          console.log('@@@useGetUsersCollection', userData);
        }
      })
      .catch(() => console.log('@@@error'));
  }, [unsub]);

  return { userData };
};
