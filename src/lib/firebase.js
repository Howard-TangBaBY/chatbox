import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6cacb.firebaseapp.com",
  projectId: "reactchat-6cacb",
  storageBucket: "reactchat-6cacb.appspot.com",
  messagingSenderId: "804128316448",
  appId: "1:804128316448:web:264b99c4b1accda6ddf045"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const database = getFirestore()
export const storage = getStorage()