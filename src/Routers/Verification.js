import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import FormValidation from '../Components/FormValidation';

const firebaseConfig = {
    apiKey: "AIzaSyB1T-KW6PHMzQOTDsrBpugVH8VFLG-z0fY",
    authDomain: "app-streamers.firebaseapp.com",
    projectId: "app-streamers",
    storageBucket: "app-streamers.appspot.com",
    messagingSenderId: "730998423671",
    appId: "1:730998423671:web:4b2573a3acce7908cb4672",
    measurementId: "G-1N91WXKSBR"
};
const app = initializeApp(firebaseConfig);

const Verification = () => {
    const[user, setUser] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[emailError, setEmailError] = useState('')
    const[passwordError, setPasswordError] = useState('')
    const[hasAccount, setHasAccount] = useState(true)

    //Limpia entradas
    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }
    //Limpia errores
    const ClearErrors = () => {
      setEmailError('')
      setPasswordError('')
    }

    const HandleLogin = () =>{
      ClearErrors();
      document.getElementById("btn-conexion").innerText="Log Out";
      app.auth().signInWithEmailAndPassword(email, password)
           .catch(err => {
             switch(err.code){
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
               case "auth/wrong-password":
                    setPasswordError(err.message)
                    break;
             }
           })
    }

    const HandleSignup = () =>{
      ClearErrors();
      app.auth().createUserWithEmailAndPassword(email, password)
      
           .catch(err => {
             switch(err.code){
               case "auth/email-already-in-use":
               case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
               case "auth/weak-password":
                    setPasswordError(err.message)
                    break;
             }
           })
    }

    const HandleLogout = () => {
      app.auth().signOut();
      document.getElementById("btn-conexion").innerHTML="Sign in";  
    }
    const authListener = () => {
      app.auth().onAuthStateChanged((user)=> {
        if(user){
          clearInputs();
          setUser(user)
        }else{
          setUser("")
        }
       }
     )
    }

    useEffect(() => {
      authListener();
    
    }, [])
    return (
      
        <div>
          {user ? (
            <p>Ya estas logeado</p>
          ):(
            <FormValidation
             email={email}
             setEmail={setEmail}
             password={password}
             setPassword={setPassword}
             HandleLoguin={HandleLogin}
             HandleLogout={HandleLogout}
             HandleSignup={HandleSignup}
             hasAccount={hasAccount}
             setHasAccount={setHasAccount}
             emailError={emailError}
             passwordError={passwordError}
             
          />
          )}
          
        </div>
        
  )
}

export default Verification;