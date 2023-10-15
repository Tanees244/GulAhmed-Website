import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = collection(db, 'products');
        const querySnapshot = await getDocs(dataRef);

        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });

        setData(documents);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, [db]);

  return (
    <div>
      <h1>Firebase Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.productID}</p>
            <p>Price: {item.newPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
