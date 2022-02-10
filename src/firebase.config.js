import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHbb9rCnuwci_edvX9pcCVCqeILzL-V9g",
  authDomain: "plot-383-bt.firebaseapp.com",
  projectId: "plot-383-bt",
  storageBucket: "plot-383-bt.appspot.com",
  messagingSenderId: "729067384011",
  appId: "1:729067384011:web:e22c837ba90e2b2aba3f4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
