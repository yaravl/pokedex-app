import { addDoc, collection } from 'firebase/firestore';

import type { DocumentData, WithFieldValue } from '@firebase/firestore';

import { Collection, database } from '../instance';

export const addDocument = <T extends WithFieldValue<DocumentData>>(
  collectionName: Collection,
  data: T
) => addDoc(collection(database, collectionName), data);
