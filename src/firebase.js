import * as firebase from "firebase";
// import firebase from "firebase/app";
// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyAqNryX4hdaqzGnCWFVf9FlAZwInhbpQPY",
  authDomain: "react-crud-114c5.firebaseapp.com",
  databaseURL: "https://react-crud-114c5.firebaseio.com",
  projectId: "react-crud-114c5",
  storageBucket: "react-crud-114c5.appspot.com",
  messagingSenderId: "94486297813",
  appId: "1:94486297813:web:a1156c9fac62b6ea51765c",
  measurementId: "G-KQ4FZSDML2"
};
// Initialize Firebase
let firebaseDb = firebase.initializeApp(config);
 
export default firebaseDb.database().ref();
