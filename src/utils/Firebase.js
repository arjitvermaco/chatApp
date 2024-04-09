import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVr0H40u7fRJpOp1IWdC-i2MwobSSHq5Y",
  authDomain: "chatapp-rt-d728e.firebaseapp.com",
  projectId: "chatapp-rt-d728e",
  storageBucket: "chatapp-rt-d728e.appspot.com",
  messagingSenderId: "461552076274",
  appId: "1:461552076274:web:5d3514be12cb060ab8176b",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default auth;
