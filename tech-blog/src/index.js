import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHmrVJlHo6X9BDL0hzamS4s4ut9j845xE",
  authDomain: "tech-blog-29a92.firebaseapp.com",
  projectId: "tech-blog-29a92",
  storageBucket: "tech-blog-29a92.appspot.com",
  messagingSenderId: "436782615717",
  appId: "1:436782615717:web:a6b06273432e5a8ecb914c"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
