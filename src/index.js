import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYqQcIG8BUKGrgHouTtn9MEnyG5dPFmqY",
  authDomain: "website-ce219.firebaseapp.com",
  projectId: "website-ce219",
  storageBucket: "website-ce219.appspot.com",
  messagingSenderId: "438521363367",
  appId: "1:438521363367:web:4491c5797d0e3725e3d482",
  measurementId: "G-BP4560T5VC"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
