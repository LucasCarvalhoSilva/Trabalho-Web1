import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBkZukvP9R-Q70lF7XNZUW0qDJi7HPkFXI",
    authDomain: "myhealth-e5f2f.firebaseapp.com",
    projectId: "myhealth-e5f2f",
    storageBucket: "myhealth-e5f2f.appspot.com",
    messagingSenderId: "684383200960",
    appId: "1:684383200960:web:57e74f162c76f8c370ef25"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true})

export { app, auth, db };