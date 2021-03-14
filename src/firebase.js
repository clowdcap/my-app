import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPWt0gbP2A1rOhyvCFT3WXpod8Z2CZ3v8",
    authDomain: "instagram-clone-curso-8a6ce.firebaseapp.com",
    projectId: "instagram-clone-curso-8a6ce",
    storageBucket: "instagram-clone-curso-8a6ce.appspot.com",
    messagingSenderId: "416892183221",
    appId: "1:416892183221:web:25416a44c67ce0534254fc",
    measurementId: "G-TJ7Z9MZG9S"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};

