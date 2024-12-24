
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOvTJf0g-AOzWpV_Kb2P6EfaLKWDEOGEA",
  authDomain: "test-69d34.firebaseapp.com",
  projectId: "test-69d34",
  storageBucket: "test-69d34.firebasestorage.app",
  messagingSenderId: "450146640323",
  appId: "1:450146640323:web:99f435a6a18cf5e32a9d76",
  databaseURL: "https://todolist-b31d4-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);