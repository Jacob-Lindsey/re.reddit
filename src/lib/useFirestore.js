import { useState, useEffect } from 'react';
import { db } from './firebase';

function useFirestore(collection) {

  const [docs, setDocs] = useState(null);

  useEffect(
    () => {
      const query = db.collection(collection);

      const unsub = query.onSnapshot((snap) => {
        const comments = snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(`Getting ${collection},${document}`);
        setDocs(comments);
      });
      return () => unsub();
    },
    [collection]
  );

  return [docs];
}

export default useFirestore;