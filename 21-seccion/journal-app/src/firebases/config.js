// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5295YfscdT0uCNvk4FogDUR8YZUsaP68",
  authDomain: "react-curso-d5f6b.firebaseapp.com",
  projectId: "react-curso-d5f6b",
  storageBucket: "react-curso-d5f6b.appspot.com",
  messagingSenderId: "131396778732",
  appId: "1:131396778732:web:6bbfc40e5c6f68831003c9",
  measurementId: "G-J2Z85F36VD"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// autenticacion
export const FirebaseAppAuth = getAuth( FirebaseApp )
// base de datos
export const FirebaseDB = getFirestore( FirebaseApp )
// const analytics = getAnalytics(app);