import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnIOyD1_hpf4S5TEuvKb_m6lWnatTcGcw",
    authDomain: "secret-chat-44701.firebaseapp.com",
    projectId: "secret-chat-44701",
    storageBucket: "secret-chat-44701.appspot.com",
    messagingSenderId: "926061748591",
    appId: "1:926061748591:web:d07934448940094cca889a"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };