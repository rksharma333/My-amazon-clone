// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBy2d323AMRAJKzuBgnHbiSJ_ESpMnfkTk",
  authDomain: "clone-c3869.firebaseapp.com",
  projectId: "clone-c3869",
  storageBucket: "clone-c3869.appspot.com",
  messagingSenderId: "940479786967",
  appId: "1:940479786967:web:efa81c3de1598f80212592",
  measurementId: "G-3N9J3BL2E1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };