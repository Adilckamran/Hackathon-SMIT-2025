import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5gnDq1ceCa31UFYeQsCnAfe3hLwiFj9k",
  authDomain: "hackathon-f1a6d.firebaseapp.com",
  projectId: "hackathon-f1a6d",
  storageBucket: "hackathon-f1a6d.firebasestorage.app",
  messagingSenderId: "333207644237",
  appId: "1:333207644237:web:70d3b7c8567b6e11a0d404",
  measurementId: "G-7J0Y27GYVM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);