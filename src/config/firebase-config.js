//inicializar aplicacion farebase 
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB_rjscg-epRgNzy8He4grSKZLZFJRg0M4",
    authDomain: "animalsmistyc.firebaseapp.com",
    projectId: "animalsmistyc",
    storageBucket: "animalsmistyc.appspot.com",
    messagingSenderId: "831622433631",
    appId: "1:831622433631:web:1422026de56f21218f44ea"
  };

  export default firebase.initializeApp(firebaseConfig);