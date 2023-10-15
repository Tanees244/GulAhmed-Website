import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

function DataDisplay() {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState('priceAsc');

  useEffect(() => {
    fetchData(sortOption);
  }, [sortOption]);

  const fetchData = async (sortOption) => {
    try {
      const dataRef = collection(db, 'products');
      let sortField;
      let sortOrder = 'asc'; 
  
      if (sortOption === 'priceAsc') {
        sortField = 'newPrice';
        sortOrder = 'asc';
      } else if (sortOption === 'priceDesc') {
        sortField = 'newPrice';
        sortOrder = 'desc';
      } else if (sortOption === 'discountAsc') {
        sortField = 'discount';
        sortOrder = 'asc';
      } else if (sortOption === 'discountDesc') {
        sortField = 'discount';
        sortOrder = 'desc';
      } else {
        sortField = 'dateAdded';
        sortOrder = 'asc';
      }
  
      const q = query(dataRef, orderBy(sortField, sortOrder), limit(12)); 
      const querySnapshot = await getDocs(q);
  
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
  
      setData(documents);
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  return (
    <div>
      <h1>Firebase Data</h1>
      <div>
        <button onClick={() => setSortOption('priceAsc')}>Sort by Price (Asc)</button>
        <button onClick={() => setSortOption('priceDesc')}>Sort by Price (Desc)</button>
        <button onClick={() => setSortOption('discountAsc')}>Sort by Discount (Asc)</button>
        <button onClick={() => setSortOption('discountDesc')}>Sort by Discount (Desc)</button>
        <button onClick={() => setSortOption('dateAdded')}>Sort by Date Added</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.brand}</p>
            <p>Price: {item.newPrice}</p>
            <p>Discount: {item.discount}</p>
            <p>Date Added: {item.dateAdded}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
