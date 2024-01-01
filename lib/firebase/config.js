// Import the functions you need from the SDKs you need
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzySfrxdjfAyUiiAREV7VtF-tX1xiC_8",
  authDomain: "digital-scrap-dc471.firebaseapp.com",
  projectId: "digital-scrap-dc471",
  storageBucket: "digital-scrap-dc471.appspot.com",
  messagingSenderId: "1018730329907",
  appId: "1:1018730329907:web:9fdaabfb871e26b8947046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export default app;