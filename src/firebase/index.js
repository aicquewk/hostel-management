import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth;
const firestore = firebase.firestore();
const storage = firebase.storage();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default { storage, database, auth, firestore, FacebookAuthProvider };