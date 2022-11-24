// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeTRwDpI_FqCHRsshLKnYKolbzEXSMxbw",
    authDomain: "mobile-resale-market.firebaseapp.com",
    projectId: "mobile-resale-market",
    storageBucket: "mobile-resale-market.appspot.com",
    messagingSenderId: "535610582597",
    appId: "1:535610582597:web:409e738a481a3a8adea52c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;