import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9DQxIDeEiF_hLBaAi4s2RuK76tHrlaIw",
  authDomain: "projetomobile-as65d.firebaseapp.com",
  projectId: "projetomobile-as65d",
  storageBucket: "projetomobile-as65d.appspot.com",
  messagingSenderId: "954482596153",
  appId: "1:954482596153:web:51cda23f7b566872abb0e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;