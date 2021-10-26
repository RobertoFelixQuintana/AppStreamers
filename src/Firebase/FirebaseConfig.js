import firebase from 'firebase/compat/app';

var firebaseConfig = {
  apiKey: "AIzaSyCy2Lc5IWy9qQIs4GQK_tJZPUqKJi_4oeU",
  authDomain: "appstreamers-c2f91.firebaseapp.com",
  databaseURL: "https://appstreamers-c2f91-default-rtdb.firebaseio.com",
  projectId: "appstreamers-c2f91",
  storageBucket: "appstreamers-c2f91.appspot.com",
  messagingSenderId: "81321790737",
  appId: "1:81321790737:web:15d267d9feb948247ed0b0",
  measurementId: "G-5VXFBEKLBN"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
