// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8t5KdMETSaJsfSUTJRF5wLCe717mXPVc",
  authDomain: "flip-zon-df225.firebaseapp.com",
  projectId: "flip-zon-df225",
  storageBucket: "flip-zon-df225.appspot.com",
  messagingSenderId: "821491142965",
  appId: "1:821491142965:web:f059060132535ffdfabc7c",
  measurementId: "G-B32ZL93L28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;