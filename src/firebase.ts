import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCmfUdk0VI76nZ_o8wzuM9vh9hfhbfZQOU",
    authDomain: "react-firebase-todo-197e8.firebaseapp.com",
    projectId: "react-firebase-todo-197e8",
    storageBucket: "react-firebase-todo-197e8.appspot.com",
    messagingSenderId: "871590266350",
    appId: "1:871590266350:web:eeac01f03960b75de63aff"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
