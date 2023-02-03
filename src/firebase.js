import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import firebase from'firebase/compat/app'
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "student-management-b9bdd.firebaseapp.com",
  projectId: "student-management-b9bdd",
  storageBucket: "student-management-b9bdd.appspot.com",
  messagingSenderId: "412714420718",
  appId: "1:412714420718:web:ca3747f98f3cc70cb366ff"
};

const firebaseDB=firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default firebaseDB.database().ref();