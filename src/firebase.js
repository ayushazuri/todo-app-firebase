// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA5iVIv-cYUIooNhWN9pVOteaTCme8KNyU",
  authDomain: "todo-app-firebase11.firebaseapp.com",
  projectId: "todo-app-firebase11",
  storageBucket: "todo-app-firebase11.appspot.com",
  messagingSenderId: "487801605794",
  appId: "1:487801605794:web:d942ea6f0df4ac572bd1fb",
  measurementId: "G-B60BQWWRLN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
