import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2uGGLUkqRp0DH3VvMY22_jcGjawdF7E4",
  authDomain: "pendekkan-a8992.firebaseapp.com",
  projectId: "pendekkan-a8992",
  storageBucket: "pendekkan-a8992.appspot.com",
  messagingSenderId: "923140852215",
  appId: "1:923140852215:web:d084b0e25f5f1fce6f06f2",
  measurementId: "G-C6FT27FN6X"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
