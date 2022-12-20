import { collection, query, where } from 'firebase/firestore';
import React from 'react';

import { Button } from '@common';
import { INITIAL_STORE, useStore } from '@utils/contexts';
import { database, useCollection, useSignoutMutation } from '@utils/firebase';

import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
  const { user, setStore } = useStore();
  const signoutMutation = useSignoutMutation();
  const q = query(collection(database, 'pokemons'), where('uid', '==', user.uid));
  const { data } = useCollection(q);
  console.log('data', data);

  return (
    <div className={styles.page}>
      <h1 className='pb-10'>Profile page</h1>

      {user.photoURL && <img src={user.photoURL} alt='' />}

      <div>{user.displayName}</div>
      <div>{user.email}</div>

      <Button
        onClick={async () => {
          signoutMutation.mutate({});
          setStore(INITIAL_STORE);
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

// TODO: 1:10
