import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD51r8L_FtlUugvY97oRwjOb8d9Tqo_SdU",
    authDomain: "note-project-1dab3.firebaseapp.com",
    projectId: "note-project-1dab3",
    storageBucket: "note-project-1dab3.appspot.com",
    messagingSenderId: "228676140659",
    appId: "1:228676140659:web:3e62c476f145b331473406"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //firebaseConfig.initializeApp(firebaseConfig);

  export default app;