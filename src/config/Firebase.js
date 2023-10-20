// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-MUIinpBQ2WL9DeTXHtk2WANa3dzpmBg",
  authDomain: "restaurant-925b0.firebaseapp.com",
  projectId: "restaurant-925b0",
  storageBucket: "restaurant-925b0.appspot.com",
  messagingSenderId: "1083585843502",
  appId: "1:1083585843502:web:9a3c7feea27d39825b6abf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)