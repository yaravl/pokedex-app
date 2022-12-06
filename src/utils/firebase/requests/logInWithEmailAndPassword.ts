import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../instance';

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    const err = e as Error;
    console.error(err);
  }
};
