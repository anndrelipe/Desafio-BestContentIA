import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGkXfRWLt1U4am2CsLycGxg-dvvsHBrBc",
  authDomain: "bestcontent-challenge.firebaseapp.com",
  projectId: "bestcontent-challenge",
  storageBucket: "bestcontent-challenge.appspot.com",
  messagingSenderId: "208580342760",
  appId: "1:208580342760:web:c6f991b8142d1c6e44ea5d"
};

const firebase_connection = initializeApp(firebaseConfig);

export default firebase_connection