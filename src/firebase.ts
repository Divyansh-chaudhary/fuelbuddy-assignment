// Import the functions you need from the SDKs you need
import { type FirebaseOptions, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAWUczj0EfaglrCc4m5pcYBu3Wz-e55k3U",
  authDomain: "vue-store-228f7.firebaseapp.com",
  projectId: "vue-store-228f7",
  storageBucket: "vue-store-228f7.appspot.com",
  messagingSenderId: "405517182051",
  appId: "1:405517182051:web:435cf4a50004e7718ec456",
  measurementId: "G-22Q9ZCX0V6",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
