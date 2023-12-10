// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwuDMmk6T3FbsJ6fJ_-iFYhVVwXP31EtA",
  authDomain: "chatproject-7c872.firebaseapp.com",
  projectId: "chatproject-7c872",
  storageBucket: "chatproject-7c872.appspot.com",
  messagingSenderId: "802137682885",
  appId: "1:802137682885:web:7923658fd80c5db542d1ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);