import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLJL40omZCpfMWHQSD-uwRNzNbaKLRBnM",
  authDomain: "twitter-clon-6d766.firebaseapp.com",
  projectId: "twitter-clon-6d766",
  storageBucket: "twitter-clon-6d766.appspot.com",
  messagingSenderId: "105487446379",
  appId: "1:105487446379:web:b6ea0908d1912d0ff4dc2e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
