import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC-z9rXMNEEZbelnvOG96XmD3R5wyKhVMo",
    authDomain: "tinder-clone-mern-7fc34.firebaseapp.com",
    databaseURL: "https://tinder-clone-mern-7fc34.firebaseio.com",
    projectId: "tinder-clone-mern-7fc34",
    storageBucket: "tinder-clone-mern-7fc34.appspot.com",
    messagingSenderId: "176089601644",
    appId: "1:176089601644:web:01e71c351d09855c0c2a49",
    measurementId: "G-1K5DRF02ND"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;