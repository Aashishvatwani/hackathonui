// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase,ref,onValue } from "firebase/database"; // Import getDatabase

const firebaseConfig = {
  apiKey: "AIzaSyDrbfGcY2nDQuRIr5UEcmF8LbTppDaReoA",
  authDomain: "online-code-conducting-form.firebaseapp.com",
  projectId: "online-code-conducting-form",
  storageBucket: "online-code-conducting-form.firebasestorage.app",
  messagingSenderId: "545508472062",
  appId: "1:545508472062:web:54cb97710df165272221af",
  measurementId: "G-CCCKME2H9V",
  databaseURL: "https://online-code-conducting-form-default-rtdb.firebaseio.com",  // ADD THIS LINE
};

 const app = initializeApp(firebaseConfig);

const database = getDatabase(app); // Initialize Realtime Database
export {database,ref,onValue,app};
