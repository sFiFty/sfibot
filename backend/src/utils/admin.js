const admin = require('firebase-admin');
const serviceAccount = require('../sfibot-4d84b-firebase-adminsdk-nk8wk-db52a0961c.json');

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    apiKey: "AIzaSyCuoHdkbGAPaRPndj_q17JE4ayf134714I",
    authDomain: "sfibot-4d84b.firebaseapp.com",
    databaseURL: "https://sfibot-4d84b-default-rtdb.firebaseio.com",
    projectId: "sfibot-4d84b",
    storageBucket: "sfibot-4d84b.appspot.com",
    messagingSenderId: "749841746078",
    appId: "1:749841746078:web:6583b7449c39634d6a538f",
    measurementId: "G-1YFF0HVF24"
  };

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

module.exports = { admin, db };