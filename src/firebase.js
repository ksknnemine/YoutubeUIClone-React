import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA3pCMFal52kLtPISUTkL8kkoJSUPhUULI",
  authDomain: "video-e40a6.firebaseapp.com",
  projectId: "video-e40a6",
  storageBucket: "video-e40a6.appspot.com",
  messagingSenderId: "655746237189",
  appId: "1:655746237189:web:819446a2f39e57e17c6d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;