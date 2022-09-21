// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'react-chat-app-69113.firebaseapp.com',
  projectId: 'react-chat-app-69113',
  storageBucket: 'react-chat-app-69113.appspot.com',
  messagingSenderId: '344537587450',
  appId: '1:344537587450:web:bfdc67171bfd222d887343',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
