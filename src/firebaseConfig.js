import{initializeApp} from"firebase/app" ;
import{getAnalytics} from"firebase/analytics";
import{getFirestore} from"firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKnL0EA4X8k4o7C33GfdrsF6-1fjFb8LU",
  authDomain: "pamelakerley-2cff5.firebaseapp.com",
  projectId: "pamelakerley-2cff5",
  storageBucket: "pamelakerley-2cff5.appspot.com",
  messagingSenderId: "906973508680",
  appId: "1:906973508680:web:46dfc272dcbfcab361947d",
  measurementId: "G-4EW16JJWY7"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth(app)
  const db = getFirestore(app);
  export {auth,db};