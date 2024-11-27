import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDV8uCfgpjzqGZr7rblvK5o9eqM_ze63jU",
    authDomain: "auth-exemple-4a7eb.firebaseapp.com",
    projectId: "auth-exemple-4a7eb",
    storageBucket: "auth-exemple-4a7eb.appspot.com",
    messagingSenderId: "252655244398",
    appId: "1:252655244398:web:a2b407dd5a23558000427f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
