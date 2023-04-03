import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFC8y7Eazz7LfB2_jPZMavfehgoa7PM4Y",
    authDomain: "traviaquizapp.firebaseapp.com",
    projectId: "traviaquizapp",
    storageBucket: "traviaquizapp.appspot.com",
    messagingSenderId: "7341374812",
    appId: "1:7341374812:web:825b36d5d4b3f81ea39599",
    measurementId: "G-0SH8R4VHTM"
  };

  //  Help us with debugging.
  if (!firebaseConfig.apiKey) throw new Error("Missing firebase credentioal: apiKey");
  if (!firebaseConfig.authDomain) throw new Error("Missing firebase credentioal: authDomain");
  if (!firebaseConfig.projectId) throw new Error("Missing firebase credentioal: projectId");
  if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credentioal: storageBucket");
  if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credentioal: messagingSenderId");
  if (!firebaseConfig.appId) throw new Error("Missing firebase credentioal: appId");
  if (!firebaseConfig.measurementId) throw new Error("Missing firebase credentioal: measurementId");

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db, firebase};