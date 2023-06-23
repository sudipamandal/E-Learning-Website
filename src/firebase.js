import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDwJ_MiiP4uD4c7RnfIs9EIdXlNa3rvIgU",
  authDomain: "react-authentication-681bc.firebaseapp.com",
  projectId: "react-authentication-681bc",
  storageBucket: "react-authentication-681bc.appspot.com",
  messagingSenderId: "25069353433",
  appId: "1:25069353433:web:116bb27dbcfaf7ab5b41c8",
  measurementId: "G-MJB66GH800",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
