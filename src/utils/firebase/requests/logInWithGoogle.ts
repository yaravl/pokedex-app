import { signInWithPopup } from 'firebase/auth';

import { auth, googleProvider } from '../instance';

export const logInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    return response;
  } catch (err) {
    console.error(err);
  }
};
