import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCCp52ewicdsJ4iJJoqZLGUi7rdb-af_xI",
    authDomain: "utility-subset-310517.firebaseapp.com",
    projectId: "utility-subset-310517",
    storageBucket: "utility-subset-310517.appspot.com",
    messagingSenderId: "765312133969",
    appId: "1:765312133969:web:3d14743fa39e281d048170",
    measurementId: "G-TWYJ91LMYB"
};

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);
