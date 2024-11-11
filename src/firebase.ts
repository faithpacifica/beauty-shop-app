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
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const firestore = getFirestore(app);
// const database = getDatabase(app);  // Initialize Realtime Database

// export { firestore,database };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

