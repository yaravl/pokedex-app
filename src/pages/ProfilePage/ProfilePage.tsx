import React from 'react';

import { useStore } from '@utils/contexts';

import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
  const { user } = useStore();
  console.log('user', user);

  return (
    <div className={styles.page}>
      <h1 className='pb-10'>Profile page</h1>
      <div>
        <img src={user?.photoURL || ''} alt='' />
      </div>
      <div>{user?.displayName}</div>
      <div>{user?.email}</div>
    </div>
  );
};
