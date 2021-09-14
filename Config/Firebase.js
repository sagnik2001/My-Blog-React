import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCdW7Y-QSTv_FTPni3qvEA_kJuBzEEMHGE",
  authDomain: "react-my-blog-14b45.firebaseapp.com",
  projectId: "react-my-blog-14b45",
  storageBucket: "react-my-blog-14b45.appspot.com",
  messagingSenderId: "335533186158",
  appId: "1:335533186158:web:be81d4b02bb8226ccc1a7f"
};
firebase.initializeApp(firebaseConfig)

firebase.firestore()
export default firebase
