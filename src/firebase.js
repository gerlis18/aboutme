import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAf6DCL7oqwBKRF24T4FznWZCDfBV3Q8yI",
  authDomain: "portfolio-b8a6b.firebaseapp.com",
  databaseURL: "https://portfolio-b8a6b.firebaseio.com",
  projectId: "portfolio-b8a6b",
  storageBucket: "",
  messagingSenderId: "282949574304",
  appId: "1:282949574304:web:1b97145e7d6350c94e33c5"
};

firebase.initializeApp(config);
const databaseRef = firebase.firestore();
export const dbRef = databaseRef;
