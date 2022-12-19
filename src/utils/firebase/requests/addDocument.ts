import { addDoc, collection } from 'firebase/firestore';

import type { DocumentData, WithFieldValue } from '@firebase/firestore';

import { database } from '../instance';

export const addDocument = <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  data: T
) => addDoc(collection(database, collectionName), data);

// TODO: 36:51
