// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJqd1HR_Z429PAUKPZn6KlhyCNd6hixqw',
  authDomain: 'pokemons-6b1fb.firebaseapp.com',
  projectId: 'pokemons-6b1fb',
  storageBucket: 'pokemons-6b1fb.appspot.com',
  messagingSenderId: '1065658668234',
  appId: '1:1065658668234:web:50054062cd5f1b549d9033'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    const err = e as Error;
    console.error(err);
  }
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
};

export const registerWithEmailAndPassword = async (user: User, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, user.email, password);

    await addDoc(collection(db, 'users'), {
      uid: response.user.uid,
      ...user,
      authProvider: 'local'
    });
  } catch (err) {
    console.error(err);
  }
};
