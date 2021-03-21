const admin = require('firebase-admin');
require('dotenv').config();
const serviceAccount = require('../firebase_sert.json');

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_API,
    appId: process.env.APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

module.exports = { admin, db };