// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpO9t67cxEtFhv1n8XYBb4_CiwfMk0hoM",
    authDomain: "clone-a348f.firebaseapp.com",
    projectId: "clone-a348f",
    storageBucket: "clone-a348f.appspot.com",
    messagingSenderId: "429027637213",
    appId: "1:429027637213:web:367cad335ca49c52946834",
    measurementId: "G-C76KE58K8Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};