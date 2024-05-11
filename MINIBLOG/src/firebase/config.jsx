import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAT931AO3esFCCDvUnrsit3-aPAq2P6O-U",
  authDomain: "miniblog-486b5.firebaseapp.com",
  projectId: "miniblog-486b5",
  storageBucket: "miniblog-486b5.appspot.com",
  messagingSenderId: "157092566488",
  appId: "1:157092566488:web:0c2544bb527ff527524ead",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
