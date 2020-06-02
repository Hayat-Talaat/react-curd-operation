import firebase from "firebase";
// import firebase from "firebase/app";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBWuHXEi9JWG40qbI3hyvCsPVKP1SuuDEo",
  authDomain: "curd-operation-55e48.firebaseapp.com",
  databaseURL: "https://curd-operation-55e48.firebaseio.com",
  projectId: "curd-operation-55e48",
  storageBucket: "curd-operation-55e48.appspot.com",
  messagingSenderId: "409575173774",
  appId: "1:409575173774:web:636cce2b208dcdb045e3df",
  measurementId: "G-YEKZ4GCZVB"
};
firebase.initializeApp(config);

export default firebase;

// Initialize Firebase
// let firebaseDb = firebase.initializeApp(config);
 
// export default firebaseDb.database().ref();
