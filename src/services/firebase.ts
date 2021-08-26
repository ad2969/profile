import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const CONFIG = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: "466247631239",
    appId: "1:466247631239:web:28e2dedd3f5ba0128f5322",
    measurementId: "G-9XVW16ET5W"
};

const app = initializeApp(CONFIG);
const db = getDatabase(app);
export const statusDbRef = ref(db, "/status");
