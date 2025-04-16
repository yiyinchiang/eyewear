import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "1111",
  authDomain: "Dai_eyewear.firebaseapp.com",
  projectId: "Eyewear",
  storageBucket: "Dai_eyewear.appspot.com",
  messagingSenderId: "1111",
  appId: "1111"
};

// Initialize Firebase
let firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { firebaseApp, db };