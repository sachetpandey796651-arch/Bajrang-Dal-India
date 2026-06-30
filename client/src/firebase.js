import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEivB1PR4VPfmUyDHT3e2ReBqOXLaAisQ",
  authDomain: "bajrang-dal-india.firebaseapp.com",
  projectId: "bajrang-dal-india",
  storageBucket: "bajrang-dal-india.firebasestorage.app",
  messagingSenderId: "57711979925",
  appId: "1:57711979925:web:7d7430d7a2b36460069a9c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);