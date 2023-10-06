// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaRTZ2GNp_VUUhIRKA2GWX9iuvxmSaCeo",
  authDomain: "ninth-assignment-12921.firebaseapp.com",
  projectId: "ninth-assignment-12921",
  storageBucket: "ninth-assignment-12921.appspot.com",
  messagingSenderId: "493120238945",
  appId: "1:493120238945:web:1d7a03539b7110c4bfc120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;