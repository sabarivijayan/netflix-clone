import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ-xLSbvxERYFfKIxV8OiofqUNtXo0FQ0",
  authDomain: "react-netflix-clone-dd2a6.firebaseapp.com",
  projectId: "react-netflix-clone-dd2a6",
  storageBucket: "react-netflix-clone-dd2a6.appspot.com",
  messagingSenderId: "556049828266",
  appId: "1:556049828266:web:74eefb328ee17c542743d3",
  measurementId: "G-CLSP5SHB66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);