// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBP4dhsYjEaBtV0sAPSdi8vz5kWpqtxCzc",
  authDomain: "listacompras-58bc8.firebaseapp.com",
  projectId: "listacompras-58bc8",
  storageBucket: "listacompras-58bc8.firebasestorage.app",
  messagingSenderId: "64926484236",
  appId: "1:64926484236:web:59b3d0cf30fdb3cb636b29",
  measurementId: "G-EGCV69F4ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);