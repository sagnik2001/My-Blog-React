import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig2 = {
  apiKey: "AIzaSyAXVJiDIXPYqt7baLOb077kEn6XD8gWTgs",
  authDomain: "login-8cea6.firebaseapp.com",
  projectId: "login-8cea6",
  storageBucket: "login-8cea6.appspot.com",
  messagingSenderId: "884475007315",
  appId: "1:884475007315:web:90433c0a25366e87ded1a6"
};
const fire=firebase.initializeApp(firebaseConfig2, 'secondary');
export default fire;
