// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHCt1ke0cwCSIGTv4xeolCDHRaSD2kvNw",
  authDomain: "vite-contact-32310.firebaseapp.com",
  projectId: "vite-contact-32310",
  storageBucket: "vite-contact-32310.appspot.com",
  messagingSenderId: "860838957182",
  appId: "1:860838957182:web:0c91a0731d756ebcaf482f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);