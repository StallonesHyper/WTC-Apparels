import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoshSmjC3AgaKWB3zzP0BCN4li-q8GIXk",
  authDomain: "wtc-co.firebaseapp.com",
  projectId: "wtc-co",
  storageBucket: "wtc-co.appspot.com",
  messagingSenderId: "347349802085",
  appId: "1:347349802085:web:f158c7e2e248dd9391fa8c",
  measurementId: "G-1CPJRQH7RB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  console.log(userSnapshot.exists());
};
