import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5PqqFq5MXPBs8ilkfCXGP7ZfC1JVNOq8",
  authDomain: "clone-cc82e.firebaseapp.com",
  projectId: "clone-cc82e",
  storageBucket: "clone-cc82e.appspot.com",
  messagingSenderId: "56262868583",
  appId: "1:56262868583:web:33fdfbc32304e304201ec2",
  measurementId: "G-6F0RQ3HKHP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
