// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your own Firebase configuration snippet here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Simple check for placeholder values
if (
  firebaseConfig.apiKey === "YOUR_API_KEY" ||
  firebaseConfig.projectId === "YOUR_PROJECT_ID" ||
  firebaseConfig.authDomain === "YOUR_AUTH_DOMAIN"
) {
  console.warn(
    "Firebase configuration in src/lib/firebase.ts appears to be using " +
    "placeholder values (e.g., YOUR_API_KEY, YOUR_PROJECT_ID). " +
    "Please replace them with your actual Firebase project credentials " +
    "from the Firebase console for the app to work correctly. " +
    "If you have already updated them, ensure they are correct and saved."
  );
}

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db };
