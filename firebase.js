import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFELGeVdbBdwis5qnD6it4Eg4Nz0p_7g",
  authDomain: "mobileapp-auth-f26a7.firebaseapp.com",
  projectId: "mobileapp-auth-f26a7",
  storageBucket: "mobileapp-auth-f26a7.appspot.com",
  messagingSenderId: "497141133884",
  appId: "1:497141133884:web:beb56ffa5d446c08d44939"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

// Initialize Firebase
initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(FIREBASE_APP);

export { getApp, getAuth };
