import React, { useState, useEffect } from 'react';
import fire from '../Firebase/FirebaseConfig';
import FormValidation from '../Components/FormValidation';
import 'firebase/compat/auth';
import FormData from '../Components/FormData';
import Swal from 'sweetalert2'


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
      clearInputs();
      fire.auth().signInWithEmailAndPassword(email, password)
      .then(()=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has iniciado sesion correctamente',
          showConfirmButton: true,
          timer: 3000
        }) 
      })
      .catch((error) => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario o contraseña incorrecto',
            showConfirmButton: false,
            timer: 3000
        }) 
      });
    }

    const HandleSignup = () =>{
      ClearErrors();
      
      fire.auth().createUserWithEmailAndPassword(email, password)
      .then(()=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has creado una cuenta con exito',
          showConfirmButton: true,
          timer: 3000
        }) 
      })
      .catch((error) => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario ya existente o incorrecto',
            showConfirmButton: false,
            timer: 3000
        }) 
      });
    }
    useEffect(() => {
      const authListener = () => {
        fire.auth().onAuthStateChanged((user)=> {
          if(user){
            clearInputs();
            setUser(user)
            document.getElementById("Log").innerText="Logout";
          }else{
            setUser("")
            document.getElementById("Log").innerText="Login";
          }
         }
       )
      }
      authListener();
    }, [])
    return (
      
        <div>
          {user ? (
            <FormData/>
          ):(
            <FormValidation
             email={email}
             setEmail={setEmail}
             password={password}
             setPassword={setPassword}
             HandleLogin={HandleLogin}
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