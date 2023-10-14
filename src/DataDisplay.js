import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get Firestore instance
    const db = getFirestore();

    // Get Auth instance
    const auth = getAuth();

    const fetchData = async () => {
      const dataRef = collection(db, 'users'); // Replace with your Firestore collection name

      try {
        const querySnapshot = await getDocs(dataRef);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firestore</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> {/* Modify this based on your data structure */}
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
