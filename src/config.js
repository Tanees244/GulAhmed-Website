// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAYqQcIG8BUKGrgHouTtn9MEnyG5dPFmqY",
  authDomain: "website-ce219.firebaseapp.com",
  projectId: "website-ce219",
  storageBucket: "website-ce219.appspot.com",
  messagingSenderId: "438521363367",
  appId: "1:438521363367:web:4491c5797d0e3725e3d482",
  measurementId: "G-BP4560T5VC"
};

// Initialize Firebase
if (typeof window !== 'undefined' && isSupported()) {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
