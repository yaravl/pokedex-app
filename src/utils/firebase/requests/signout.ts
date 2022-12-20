import { signOut } from 'firebase/auth';

import { auth } from '@utils/firebase';

export const signout = () => signOut(auth);
