// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJtEOiYiG37i9Y7nhLe_wuJm6s1IpNsZM",
  authDomain: "coffee-da7a2.firebaseapp.com",
  projectId: "coffee-da7a2",
  storageBucket: "coffee-da7a2.appspot.com",
  messagingSenderId: "678148892241",
  appId: "1:678148892241:web:9d96d041d554058ebc7a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app