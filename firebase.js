const firebaseConfig = {
    apiKey: "AIzaSyDFfF4R_Ymsiq0oWP-lpvXXEwl0TbZ8bQg",
    authDomain: "insta-da212.firebaseapp.com",
    projectId: "insta-da212",
    storageBucket: "insta-da212.appspot.com",
    messagingSenderId: "468435086322",
    appId: "1:468435086322:web:d8ebe2583caf1c6642d96b",
    measurementId: "G-8V2FZ1J7T1"
  };
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();