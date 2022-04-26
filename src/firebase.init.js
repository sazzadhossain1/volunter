// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM_5pVfi-xqkC6_oY6T4UfKT8PyXQ9Eu8",
  authDomain: "volunter-e7d4d.firebaseapp.com",
  projectId: "volunter-e7d4d",
  storageBucket: "volunter-e7d4d.appspot.com",
  messagingSenderId: "449150019258",
  appId: "1:449150019258:web:3d661153d2013efa088483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;