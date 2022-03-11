import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaBkPhH6i-vFwP5iYkjyFrN86l_PXeUhg",
    authDomain: "todo-list-crud.firebaseapp.com",
    projectId: "todo-list-crud",
    storageBucket: "todo-list-crud.appspot.com",
    messagingSenderId: "449852753715",
    appId: "1:449852753715:web:e01a81f3d5e3c259e12046"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};