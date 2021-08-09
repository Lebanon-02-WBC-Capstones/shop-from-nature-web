import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdd8vPpSZWb16BQ74hLdxItR3mNFMU6JI",
  authDomain: "shop-from-nature.firebaseapp.com",
  projectId: "shop-from-nature",
  storageBucket: "shop-from-nature.appspot.com",
  messagingSenderId: "939906902237",
  appId: "1:939906902237:web:57936cfd36e5e6de46d334",
  measurementId: "G-RVV2GC6PR5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

export { db };

// export const auth = app.auth();

export default firebase;
