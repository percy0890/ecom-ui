import firebase from 'firebase/app';
// import 'firebase/auth'; // Firebase Authentication (optional).
// import 'firebase/database'; // The Firebase Realtime Database (optional).
// import 'firebase/firestore'; // Cloud Firestore (optional).
// import 'firebase/storage'; // Firebase Storage (optional).
import 'firebase/messaging'; // Firebase Cloud Messaging (optional).
// import 'firebase/functions'; // Firebase Cloud Functions (optional).

import config from 'app/config/index.config';

export default firebase.initializeApp(config.FIREBASE.WEB);
