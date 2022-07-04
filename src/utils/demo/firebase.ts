
import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
const firebaseConfig : any = {
  apiKey: "AIzaSyBoqB2MtC5hoH7OqnxVUq7JDwKfpvaPPsU",
  authDomain: "toper-storage.firebaseapp.com",
  projectId: "toper-storage",
  storageBucket: "toper-storage.appspot.com",
  messagingSenderId: "913923300781",
  appId: "1:913923300781:web:90713ae356aa90f3689524",
  measurementId: "G-VLRHXNYKYH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()
