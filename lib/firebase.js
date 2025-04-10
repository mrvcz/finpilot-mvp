import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxbkIhqt9URugh7EQ9FSlUZN6ur8D6vWA",
  authDomain: "finpilot-mvp-9fec3.firebaseapp.com",
  projectId: "finpilot-mvp-9fec3",
  storageBucket: "finpilot-mvp-9fec3.appspot.com",
  messagingSenderId: "761173417974",
  appId: "1:761173417974:web:cd908bc1ca847ad11db1d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
