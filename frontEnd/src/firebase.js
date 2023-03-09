import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDFala9QBkRMsoVj_p42TLj1mQiHxTO2sg",
  authDomain: "ars-groups.firebaseapp.com",
  projectId: "ars-groups",
  storageBucket: "ars-groups.appspot.com",
  messagingSenderId: "92252923330",
  appId: "1:92252923330:web:8dc7abf2335f12bcb6225b",
  measurementId: "G-PPQRLXC9WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);