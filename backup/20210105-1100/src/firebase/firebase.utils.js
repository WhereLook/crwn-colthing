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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc('users/' + userAuth.uid);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;