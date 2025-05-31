// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0wz_sOlcAyxmBEbft6fR5D6cwqufQnrw",
  authDomain: "career-counseling-1da4e.firebaseapp.com",
  projectId: "career-counseling-1da4e",
  storageBucket: "career-counseling-1da4e.firebasestorage.app",
  messagingSenderId: "919345673993",
  appId: "1:919345673993:web:f4df3c3a705de5eca085d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth