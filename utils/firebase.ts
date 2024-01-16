// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next1-blog.firebaseapp.com",
  projectId: "next1-blog",
  storageBucket: "next1-blog.appspot.com",
  messagingSenderId: "1015728321354",
  appId: "1:1015728321354:web:69400af5b8d7b2d51607b3",
};

// Initialize Firebase
if (getApps().length === 0) initializeApp(firebaseConfig);
export const app = getApp();
