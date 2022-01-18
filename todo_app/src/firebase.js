import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBR4ewpZqi5eEHNDu5ylYO4vvaoBYlnntk",
    authDomain: "todo-app-cp-98935.firebaseapp.com",
    projectId: "todo-app-cp-98935",
    storageBucket: "todo-app-cp-98935.appspot.com",
    messagingSenderId: "620209338567",
    appId: "1:620209338567:web:3571181c84b67b8d96e6e2",
    measurementId: "G-3LE9PL8C7K"
});

const db = firebaseApp.firestore();

export default db;