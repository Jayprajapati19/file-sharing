// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTqZcFWn24MwKrXkG1x2wyg_wq1npaZ08",
    authDomain: "file-sharing-f34eb.firebaseapp.com",
    projectId: "file-sharing-f34eb",
    storageBucket: "file-sharing-f34eb.appspot.com",
    messagingSenderId: "972643811539",
    appId: "1:972643811539:web:e74aad5c92e61e32a75426",
    measurementId: "G-337EV9ZRXV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);