import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdnGuHdb33bC2qtC0EZ6rinvwuUgFKJs0",
    authDomain: "flydreamair-db.firebaseapp.com",
    projectId: "flydreamair-db",
    storageBucket: "flydreamair-db.appspot.com",
    messagingSenderId: "406216153251",
    appId: "1:406216153251:web:7d02a9391f18bafbc3c716",
    measurementId: "G-FYZNRWW4GV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
