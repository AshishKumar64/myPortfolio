import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7ZRoWmMqSiwacRFpq3OPIdbda-r2mToA",
    authDomain: "contact-form-d3179.firebaseapp.com",
    projectId: "contact-form-d3179",
    storageBucket: "contact-form-d3179.appspot.com",
    messagingSenderId: "255331958825",
    appId: "1:255331958825:web:1c84cd5db1bdc59eaf9c38"
});

var db = firebaseApp.firestore();

export { db };
