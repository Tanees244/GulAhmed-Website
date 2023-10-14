import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Import the Firebase Firestore reference
import { collection, getDocs } from 'firebase/firestore'; // Add these import statements

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = collection(db, 'firestore'); // Replace with your Firestore collection name

      try {
        const snapshot = await getDocs(dataRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(data);
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Firestore Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
