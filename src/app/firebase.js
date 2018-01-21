import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBiJJSYmctm5fKxbg5nBTMh91rd74Iv6xk",
    authDomain: "railway-91a3d.firebaseapp.com",
    databaseURL: "https://railway-91a3d.firebaseio.com",
    projectId: "railway-91a3d",
    storageBucket: "railway-91a3d.appspot.com",
    messagingSenderId: "932445854959"
  };
  firebase.initializeApp(config);

export default firebase.database()