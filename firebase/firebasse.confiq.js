// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtZOjD77clMKBVKJTTq9Uoxs2gyNG79UM",
  authDomain: "second-concept-f36d9.firebaseapp.com",
  projectId: "second-concept-f36d9",
  storageBucket: "second-concept-f36d9.firebasestorage.app",
  messagingSenderId: "967648218552",
  appId: "1:967648218552:web:7b738b19b41d2c9993d34d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
