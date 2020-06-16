import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
export const getServerTimeStamp = (): firebase.firestore.FieldValue =>
  firebase.firestore.FieldValue.serverTimestamp();
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
