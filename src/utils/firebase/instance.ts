import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
