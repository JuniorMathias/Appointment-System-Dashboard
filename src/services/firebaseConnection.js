import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: ,
  authDomain: "system-25fa1.firebaseapp.com",
  projectId: "system-25fa1",
  storageBucket: "system-25fa1.appspot.com",
  messagingSenderId: "773273781866",
  appId: "1:773273781866:web:492cab01ba04cace0fac13",
  measurementId: "G-B371ZM5V1K"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;