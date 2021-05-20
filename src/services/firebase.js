import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyDD1trMzOZBS_6gTkpX7C30fapLE__hOLE",
  authDomain: "webapp-851e5.firebaseapp.com",
  databaseURL: "https://webapp-851e5.firebaseio.com",
  projectId: "webapp-851e5",
  storageBucket: "webapp-851e5.appspot.com",
  messagingSenderId: "235557315004",
  appId: "1:235557315004:web:f502883448065559544bb9"
};
  
  firebase.initializeApp(firebaseConfig)
  

  export default firebase
