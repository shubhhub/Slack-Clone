// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCrFcd7QSIvM3y2XDdCbrAtOehrMjQZzLI",
    authDomain: "slack-clone-a410a.firebaseapp.com",
    projectId: "slack-clone-a410a",
    storageBucket: "slack-clone-a410a.appspot.com",
    messagingSenderId: "379326284383",
    appId: "1:379326284383:web:d5178cc820cd180280d1ea",
    measurementId: "G-THBNEX8KZ9"
};
//from firebase.google.com>project setting>config

const firebaseApp = firebase.initializeApp(firebaseConfig) //stablish connection b/w firebase and code
const db = firebaseApp.firestore(); //connect to database
const auth = firebase.auth(); //for authorization
const provider = new firebase.auth.GoogleAuthProvider(); //google will provide that authorization
// const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp()
export { auth, provider }; 
export default db;  //can directly export this even with different name

/*

import db from './firebase'  
import database from './firebase'
both works
for other two
import {db, auth, provider} from './firebase'

*/