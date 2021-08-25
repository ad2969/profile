import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const CONFIG = {
    apiKey: "AIzaSyDqbHgHbnoz6hNPco4mHWyxE1TYDjVnm4U",
    authDomain: "profile-39bd8.firebaseapp.com",
    databaseURL: "https://profile-39bd8-default-rtdb.firebaseio.com",
    projectId: "profile-39bd8",
    storageBucket: "profile-39bd8.appspot.com",
    messagingSenderId: "466247631239",
    appId: "1:466247631239:web:28e2dedd3f5ba0128f5322",
    measurementId: "G-9XVW16ET5W"
};

const app = initializeApp(CONFIG);
const db = getDatabase(app);
export const statusDbRef = ref(db, "/status");
