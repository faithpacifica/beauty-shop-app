import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';  // Import Realtime Database

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // corrected
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,    // corrected
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase and Firestore
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
console.log(getApp,"getApp");
const firestore = getFirestore(app);
const database = getDatabase(app);  // Initialize Realtime Database

export { firestore,database };



// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCQ-5YDyq6AqmKB0qQbzF1jPvU4l_gi6Zo",
//     authDomain: "beauty-shop-91c90.firebaseapp.com",
//     databaseURL: "https://beauty-shop-91c90-default-rtdb.firebaseio.com",
//     projectId: "beauty-shop-91c90",
//     storageBucket: "beauty-shop-91c90.appspot.com",
//     messagingSenderId: "950575609160",
//     appId: "1:950575609160:web:99ab0cb8174865e1c06f7d"
// };

