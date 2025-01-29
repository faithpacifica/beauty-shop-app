import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration from environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase app (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

console.log(firebaseConfig,"firebaseConfig")
// Initialize Firebase services
const db = getFirestore(app); // Firestore
const auth = getAuth(app); // Authentication
const googleAuthProvider = new GoogleAuthProvider();
export { app, auth, db, googleAuthProvider };
