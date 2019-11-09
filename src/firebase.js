import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAA35RIRD-joE3pLAznRjgjQ6HL3Xhr6m8",
    authDomain: "existenz-ced16.firebaseapp.com",
    databaseURL: "https://existenz-ced16.firebaseio.com",
    projectId: "existenz-ced16",
    storageBucket: "existenz-ced16.appspot.com",
    messagingSenderId: "399103197314",
    appId: "1:399103197314:web:bc0eec3761531adb1ab49b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase