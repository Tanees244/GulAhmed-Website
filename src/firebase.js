import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCn00GG23owlGLiE7xE-R2JoVPtjRoC9go",
    authDomain: "jsonwebsite-e0bdb.firebaseapp.com",
    projectId: "jsonwebsite-e0bdb",
    storageBucket: "jsonwebsite-e0bdb.appspot.com",
    messagingSenderId: "66560867708",
    appId: "1:66560867708:web:b82afb4d7bc4ff6b67b8f9",
    measurementId: "G-J5DKK6P06M"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);