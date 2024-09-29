import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2VLyaNPTR1rPq6II4w6k2lIpdOxnV2J8",
    authDomain: "loginsetup-afe25.firebaseapp.com",
    projectId: "loginsetup-afe25",
    storageBucket: "loginsetup-afe25.appspot.com",
    messagingSenderId: "899979715563",
    appId: "1:899979715563:web:45ef027a71942280beefae",
    measurementId: "G-7QZ1X0HB83"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };