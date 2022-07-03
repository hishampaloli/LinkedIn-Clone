import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZuCn50kq1XrKIwoKY1JauewOTpyOnNsQ",
  authDomain: "linkedin-ca4ad.firebaseapp.com",
  projectId: "linkedin-ca4ad",
  storageBucket: "linkedin-ca4ad.appspot.com",
  messagingSenderId: "344651203431",
  appId: "1:344651203431:web:d07e737b4a60a7a04fe5c2",
  measurementId: "G-9ZZR8T9YV6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
