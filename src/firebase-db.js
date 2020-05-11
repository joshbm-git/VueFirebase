import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyA-wciPzAZBjM2Al8NqIfC4KBji7vZhdz4",
    authDomain: "posts-7412c.firebaseapp.com",
    databaseURL: "https://posts-7412c.firebaseio.com",
    projectId: "posts-7412c",
    storageBucket: "posts-7412c.appspot.com",
    messagingSenderId: "338837436445",
    appId: "1:338837436445:web:0852607136b1c4799c6ef4",
  })
  .firestore();

export const postRef = db.collection("posts");
