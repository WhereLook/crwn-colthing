import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoGxiqJI3EP_r3Jgq6DTOX7OlwtmZMOqo",
    authDomain: "crwn-db-9eb52.firebaseapp.com",
    projectId: "crwn-db-9eb52",
    storageBucket: "crwn-db-9eb52.appspot.com",
    messagingSenderId: "194006031947",
    appId: "1:194006031947:web:a6a9af0fd04a6f3ab077ce",
    measurementId: "G-MX56QGH1H1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;