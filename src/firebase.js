import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDjybTz20v5c3t6UDZ-9SXvGM24N4q5eE",
  authDomain: "linkedin-clone-20491.firebaseapp.com",
  projectId: "linkedin-clone-20491",
  storageBucket: "linkedin-clone-20491.appspot.com",
  messagingSenderId: "21362049580",
  appId: "1:21362049580:web:383ed60e14bf0e425b4789",
  measurementId: "G-7CJ4BRD7SH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
