import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfOGafsyVWPt7dPhppUzwajAkxRMdw6X8",
  authDomain: "foodastic-80923.firebaseapp.com",
  databaseURL: "https://foodastic-80923-default-rtdb.firebaseio.com",
  projectId: "foodastic-80923",
  storageBucket: "foodastic-80923.appspot.com",
  messagingSenderId: "357839626187",
  appId: "1:357839626187:web:f8c31b7d3002add7fbe04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;