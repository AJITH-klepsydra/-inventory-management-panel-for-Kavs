import Firebase from "firebase/compat/app";
// import { doc, getDoc, query } from "firebase/firestore";

// import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import MedicineSeed from "../service/seed/medicine_seed";
// import SeedDatabase from "../service/firebase/seed";
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_authDomain,
  REACT_APP_FIREBASE_projectId,
  REACT_APP_FIREBASE_storageBucket,
  REACT_APP_FIREBASE_messagingSenderId,
  REACT_APP_FIREBASE_appId,
  REACT_APP_FIREBASE_measurementId,
} = process.env;
const config = {
  apiKey: "AIzaSyCjKBcwxbazXH86mXPDfvDe9CqZnkbGjP0",

  authDomain: "kavs-461ba.firebaseapp.com",

  projectId: "kavs-461ba",

  storageBucket: "kavs-461ba.appspot.com",

  messagingSenderId: "968991214241",

  appId: "1:968991214241:web:d0cfa4b97cda0e4e1cfee0",

  measurementId: "G-ZVG4YZPJ03",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
const db = getFirestore();
// const medicone_seed = new MedicineSeed(firebase);
// medicone_seed.pushData();

export { firebase, FieldValue, db };

// For seed data push
// const seed = new SeedDatabase(firebase);
// // seed.pushData();
