import { DocumentData, onSnapshot, Query } from 'firebase/firestore';
import React from 'react';

export const useCollection = <T = DocumentData>(query: Query<T>) => {
  const [data, setData] = React.useState<any | null>(null);

  React.useEffect(() => {
    const unsub = onSnapshot(query, (querySnapshot) => {
      const data: any = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setData(data);
    });

    return () => {
      unsub();
    };
  }, []);

  return { data };
};
