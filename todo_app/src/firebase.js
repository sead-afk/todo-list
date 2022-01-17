const firebaseConfig{

//sadrzaj ovog ovdje kad konfiguriras

// i const firebaseConfig brises ovo iznad kad kopiras
}


import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

//ide ovdje

});

const db = firebaseApp.firestore();
export default  db ;