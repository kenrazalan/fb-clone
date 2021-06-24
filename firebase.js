import firebase from "firebase";
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAZjNPvWkRmhahtKikYM3DFCxStP7HBZXg",
    authDomain: "facebook-clone-5c150.firebaseapp.com",
    projectId: "facebook-clone-5c150",
    storageBucket: "facebook-clone-5c150.appspot.com",
    messagingSenderId: "345569729338",
    appId: "1:345569729338:web:b5066a37d7e83ff1638e03"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db,storage}