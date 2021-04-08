// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkcqqKMV1sKwL24M6uthRgbI0HWxMBKSA",
    authDomain: "e-clone-71d56.firebaseapp.com",
    databaseURL: "https://e-clone-71d56.firebaseio.com",
    projectId: "e-clone-71d56",
    storageBucket: "e-clone-71d56.appspot.com",
    messagingSenderId: "217422895848",
    appId: "1:217422895848:web:cedaad2db0ddeb34c1875d",
    measurementId: "G-PQ33WKRBSG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};