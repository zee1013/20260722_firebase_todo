// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// firestore = 데이터베이스
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Hu8JAvUjdXXBUGcuzveRzZjtJFPsiKk",
  authDomain: "react-firebase-start-a7aec.firebaseapp.com",
  projectId: "react-firebase-start-a7aec",
  storageBucket: "react-firebase-start-a7aec.firebasestorage.app",
  messagingSenderId: "570624232151",
  appId: "1:570624232151:web:427e0de390c25cdaccfe92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore 사용
export const db = getFirestore(app)
// 로그인 사용할 수 있게
export const auth = getAuth(app)
// Google 로그인 제공자
export const provider = new GoogleAuthProvider(app)