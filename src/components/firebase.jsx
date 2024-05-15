import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB83Eafm8SjWXAAqhjM9ogMkdcCuNJThiA",
  authDomain: "giftzone-fec29.firebaseapp.com",
  projectId: "giftzone-fec29",
  storageBucket: "giftzone-fec29.appspot.com",
  messagingSenderId: "836981749295",
  appId: "1:836981749295:web:ccfeb140809f66159ef8da",
  measurementId: "G-EM2NJ401ZE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
