// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXIcSTAXa0WX_V2gXow_-JdePYrjgdtUw",
    authDomain: "shortrest-8972a.firebaseapp.com",
    projectId: "shortrest-8972a",
    storageBucket: "shortrest-8972a.appspot.com",
    messagingSenderId: "797702782138",
    appId: "1:797702782138:web:36aeff742f6d486cb3d683",
    measurementId: "G-0WM4RQMPH5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
