// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAREL_4sP8ANwqw9m-WlOOXHuKtazG9IXY",
    authDomain: "converta-e-planeje.firebaseapp.com",
    projectId: "converta-e-planeje",
    storageBucket: "converta-e-planeje.firebasestorage.app",
    messagingSenderId: "1093053743340",
    appId: "1:1093053743340:web:b21127c539ea5c3eb6e5c9",
    measurementId: "G-YKZP39G9GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);