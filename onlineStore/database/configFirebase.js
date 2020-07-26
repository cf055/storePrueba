import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDmtl3KBN9uTLOYFNQddlsawQaA7u91Wy4",
  authDomain: "readerwatermeter.firebaseapp.com",
  databaseURL: "https://readerwatermeter.firebaseio.com",
  projectId: "readerwatermeter",
  storageBucket: "readerwatermeter.appspot.com",
  messagingSenderId: "939920534221",
  appId: "1:939920534221:web:f65e43fc282b8c1bba9784",
  measurementId: "G-PPSL4JWNJC"
};

export const Firebase = firebase.initializeApp(firebaseConfig);