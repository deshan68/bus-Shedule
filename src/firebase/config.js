// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';
// import { initializeApp } from 'firebase/app';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyCvDXvHA6U9N88YR05g4zmc68MNWZZVi3Q',
    authDomain: 'authentication-840df.firebaseapp.com',
    databaseURL: 'https://authentication-840df.firebaseio.com',
    projectId: 'authentication-840df',
    storageBucket: 'authentication-840df.appspot.com',
    messagingSenderId: '847829958120',
    appId: '1:847829958120:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

// const app = initializeApp(firebaseConfig);
