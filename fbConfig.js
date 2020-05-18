import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbqwFJqiTDdJqLhkcoOx-ssNam7Iwq3nQ",
    authDomain: "storage-app-6cda3.firebaseapp.com",
    databaseURL: "https://storage-app-6cda3.firebaseio.com",
    projectId: "storage-app-6cda3",
    storageBucket: "storage-app-6cda3.appspot.com",
    messagingSenderId: "234766349827",
    appId: "1:234766349827:web:7cd65b5b02e179ad670036",
    measurementId: "G-H7LFPBJR38"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;