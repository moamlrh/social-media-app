import firebase from 'firebase'

firebase.initializeApp({
    apiKey: process.env.REACT_APP_APPKEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MESSAGE,
    appId: process.env.REACT_APP_APPID
});

export const auth = firebase.auth()
export const google = new firebase.auth.GoogleAuthProvider()
export default firebase;