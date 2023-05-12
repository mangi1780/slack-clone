import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1CF1fQCWGyCa4yT3IdR6crai0AMalXxk",
  authDomain: "slack-clone-12dac.firebaseapp.com",
  projectId: "slack-clone-12dac",
  storageBucket: "slack-clone-12dac.appspot.com",
  messagingSenderId: "461324155991",
  appId: "1:461324155991:web:401e6945a778508333b712"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//passed to other files for access to DB
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
