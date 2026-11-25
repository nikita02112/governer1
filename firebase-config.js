// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwTHEGwHP0AgVMG0BJSf4_taIbKkQdxm8",
  authDomain: "governer-fa9e3.firebaseapp.com",
  projectId: "governer-fa9e3",
  storageBucket: "governer-fa9e3.firebasestorage.app",
  messagingSenderId: "904622118460",
  appId: "1:904622118460:web:9b269ac1d8d9b1f890d539",
  measurementId: "G-K808XQ7DV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
