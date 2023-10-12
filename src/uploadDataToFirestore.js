import { initializeApp } from 'firebase/app'; 
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { readFileSync } from 'fs'; 

const firebaseConfig = {
  apiKey: "AIzaSyAYqQcIG8BUKGrgHouTtn9MEnyG5dPFmqY",
  authDomain: "website-ce219.firebaseapp.com",
  projectId: "website-ce219",
  storageBucket: "website-ce219.appspot.com",
  messagingSenderId: "438521363367",
  appId: "1:438521363367:web:4491c5797d0e3725e3d482",
  measurementId: "G-BP4560T5VC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const jsonData = JSON.parse(readFileSync('data_GulAhmed.json', 'utf8'));

const uploadDataToFirestore = async (jsonData) => {
  try {
    for (const product of jsonData) {
      const docRef = await addDoc(collection(db, 'Website'), product);
      console.log('Document written with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding documents: ', error);
  }
};

uploadDataToFirestore(jsonData);
