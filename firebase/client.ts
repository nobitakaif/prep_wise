// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8Bf1oAWVKE6Ow6FD6iloETXA44Jz8JEc",
  authDomain: "prepwise-8fcee.firebaseapp.com",
  projectId: "prepwise-8fcee",
  storageBucket: "prepwise-8fcee.firebasestorage.app",
  messagingSenderId: "946286826900",
  appId: "1:946286826900:web:7b6df224456257da562b81",
  measurementId: "G-SW8CFZDJB5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)