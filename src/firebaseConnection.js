import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiKJPSn2paTNsXcc0lCLpggHkHWO6XtKk",
  authDomain: "portfolio-30dcb.firebaseapp.com",
  projectId: "portfolio-30dcb",
  storageBucket: "portfolio-30dcb.appspot.com",
  messagingSenderId: "243177500769",
  appId: "1:243177500769:web:6286e0dc6cc4778a49ba20",
  measurementId: "G-E5JZZJ8S1C"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export { db }