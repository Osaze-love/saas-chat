import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAAWeeYAhukq2jlv0jVXVEZet3nBGtgZO8",
  authDomain: "saas-translator-app-9ffeb.firebaseapp.com",
  projectId: "saas-translator-app-9ffeb",
  storageBucket: "saas-translator-app-9ffeb.appspot.com",
  messagingSenderId: "399554540979",
  appId: "1:399554540979:web:568cb0d01e5cb9720587c6",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
