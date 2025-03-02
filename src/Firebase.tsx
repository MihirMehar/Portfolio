import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCfI62CdULNJVTpL5WlAGko7bGWlC9qKbc",
  authDomain: "mihirmeharportfolio.firebaseapp.com",
  projectId: "mihirmeharportfolio",
  storageBucket: "mihirmeharportfolio.firebasestorage.app",
  messagingSenderId: "520657234422",
  appId: "1:520657234422:web:27591249c67d3c35157fd7",
  measurementId: "G-2X4VJNCH3S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
