import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyA_p8ZEpQ5IICkr8NuS86EHh6F0CqPOVkM",
    authDomain: "demologin-410d3.firebaseapp.com",
    databaseURL: "https://demologin-410d3.firebaseio.com",
    projectId: "demologin-410d3",
    storageBucket: "demologin-410d3.appspot.com",
    messagingSenderId: "760198967148"
  };
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth