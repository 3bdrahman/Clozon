// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDd6pIWtMxfcWOHy5BUAPqP_LId5ZQOPK0",
    authDomain: "clozon-fc92d.firebaseapp.com",
    projectId: "clozon-fc92d",
    storageBucket: "clozon-fc92d.appspot.com",
    messagingSenderId: "382489725383",
    appId: "1:382489725383:web:c7eb8beb2a558a6bf731e2",
    measurementId: "G-786YDXP7LM"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};