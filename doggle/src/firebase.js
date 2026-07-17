
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    

  apiKey: "AIzaSyDEqMCJiqwbFnwhgCSeJtxzF9QAcaMlm2w",
  authDomain: "food-ordering-website-22894.firebaseapp.com",
  projectId: "food-ordering-website-22894",
  storageBucket: "food-ordering-website-22894.firebasestorage.app",
  messagingSenderId: "841670281431",
  appId: "1:841670281431:web:47be0555a38cdd53ca4892",
  measurementId: "G-PVE2GBNPBM"

 
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();