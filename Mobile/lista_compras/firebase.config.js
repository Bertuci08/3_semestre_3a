// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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