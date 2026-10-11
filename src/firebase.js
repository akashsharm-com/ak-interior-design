
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8IFY8w4QCJimSQuzBHaQ8ZYy9y3n8Mig",
  authDomain: "ak-interior-website.firebaseapp.com",
  projectId: "ak-interior-website",
  storageBucket: "ak-interior-website.firebasestorage.app",
  messagingSenderId: "507888129577",
  appId: "1:507888129577:web:76a35c87c0d3888559ae38",
  measurementId: "G-XM5R9SY2NY"
};

const app = initializeApp(firebaseConfig);

export default app;

export const analyticsPromise = isSupported().then(
  (supported) => supported ? getAnalytics(app) : null
);
