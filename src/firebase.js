import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cloudgallary-e167a.firebaseapp.com",
  projectId: "cloudgallary-e167a",
  storageBucket: "cloudgallary-e167a.appspot.com",
  messagingSenderId: "1077968287960",
  appId: "1:1077968287960:web:8bfc8d99b022a79019bfad",
  measurementId: "G-7TFF1DGJB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
