// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfsr7MXzC8BdvtyNzykwWLkQLMZdP3FJY",
  authDomain: "redux-hard.firebaseapp.com",
  projectId: "redux-hard",
  storageBucket: "redux-hard.appspot.com",
  messagingSenderId: "140264615807",
  appId: "1:140264615807:web:bcdb9b73e0c4dce6ac344a",
  measurementId: "G-JYX7D6V4LE"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db}
