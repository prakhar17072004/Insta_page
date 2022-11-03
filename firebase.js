const firebaseConfig = {
  apiKey: "AIzaSyC4RpNZuasNQQJ2q3NAO0hLCbs9ZQExHmk",
  authDomain: "instaa-c50b1.firebaseapp.com",
  projectId: "instaa-c50b1",
  storageBucket: "instaa-c50b1.appspot.com",
  messagingSenderId: "143372075141",
  appId: "1:143372075141:web:ad36cf44c7b66f7758e9ec",
  measurementId: "G-0HTX5W4BV0"
};
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();