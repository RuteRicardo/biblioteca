import{initializeApp} from"firebase/app" ;
import{getAnalytics} from"firebase/analytics";
import{getFirestore} from"firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9er6V3WDfWQEgzCdSKZcSv0HvGc00YaY",
  authDomain: "rutericardobibli.firebaseapp.com",
  projectId: "rutericardobibli",
  storageBucket: "rutericardobibli.appspot.com",
  messagingSenderId: "566036640415",
  appId: "1:566036640415:web:22a4ecd8bd9bd1ed72e8aa",
  measurementId: "G-QVLYPLG2L2"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth(app)
  const db = getFirestore(app);
  export {auth,db};
