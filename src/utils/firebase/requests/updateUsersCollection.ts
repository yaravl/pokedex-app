import type { User } from 'firebase/auth';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';

import { Collection, database } from '../instance';

export const updateUsersCollection = async (
  collectionName: Collection,
  userId: User['uid'],
  data: UsersCollections
) => {
  const docRef = doc(database, collectionName, userId);

  try {
    await updateDoc(docRef, { myPokemons: arrayUnion(...data.myPokemons) });
  } catch (e) {
    await setDoc(docRef, data);
  }
};
