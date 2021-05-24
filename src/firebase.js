import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDi7gOOn5hZsG4VihSzOfBe06Yqopdr2xk",
  authDomain: "bncc010.firebaseapp.com",
  projectId: "bncc010",
  storageBucket: "bncc010.appspot.com",
  messagingSenderId: "191073306968",
  appId: "1:191073306968:web:d3aff2ba43c96d1abc7d2d",
  measurementId: "G-1T6E1EXQ8N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
