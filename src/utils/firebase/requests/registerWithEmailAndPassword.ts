import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, db } from '../instance';

export const registerWithEmailAndPassword = async (user: User, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, user.email, password);

    // await addDoc(collection(db, 'users'), {
    //   uid: response.user.uid,
    //   ...user,
    //   authProvider: 'local'
    // });

    return response;
  } catch (err) {
    console.error(err);
  }
};
