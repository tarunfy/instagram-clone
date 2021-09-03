import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuNVxcsOpqvFJcDnjln_ye261jHrajJwc",
  authDomain: "instagram-clone-9c3b5.firebaseapp.com",
  projectId: "instagram-clone-9c3b5",
  storageBucket: "instagram-clone-9c3b5.appspot.com",
  messagingSenderId: "172879011295",
  appId: "1:172879011295:web:bfd637fb1464c77799b86a",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
