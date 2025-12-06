// Import SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyDMTxNFf_EVEs46qYxvGqt5GfeQCA7uamQ",
  authDomain: "inventory-tracker-3b02b.firebaseapp.com",
  projectId: "inventory-tracker-3b02b",
  storageBucket: "inventory-tracker-3b02b.firebasestorage.app",
  messagingSenderId: "466260853850",
  appId: "1:466260853850:web:2982148d3d60955f428463",
  measurementId: "G-76LWSLWHX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);     // Database
export const storage = getStorage(app);  // Upload gambar

export default app;
