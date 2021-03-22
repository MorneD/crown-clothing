import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCQIv0xo8wYoxMhUcueayI9vM4mzchEgMw",
    authDomain: "crown-db-754bc.firebaseapp.com",
    projectId: "crown-db-754bc",
    storageBucket: "crown-db-754bc.appspot.com",
    messagingSenderId: "314632218272",
    appId: "1:314632218272:web:dcaae0dc21faca55f54bc5",
    measurementId: "G-49FB3Q21HL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;