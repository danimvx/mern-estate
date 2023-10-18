// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d4f74.firebaseapp.com",
  projectId: "mern-estate-d4f74",
  storageBucket: "mern-estate-d4f74.appspot.com",
  messagingSenderId: "767455702912",
  appId: "1:767455702912:web:8a28ed4dd3d9e61b965b65",
  measurementId: "G-ZJY8Z1M7R5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
