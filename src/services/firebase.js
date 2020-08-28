import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX",
    appId: "XXXXX"
  };
  
  firebase.initializeApp(firebaseConfig)
  

  export default firebase
