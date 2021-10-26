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

    const planes=('Usted no cuenta con algun plan');

    localStorage.getItem("plan",planes);

    const Plan1 =()=>{
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usted a comprado el plan 1 como Usuario',
          showConfirmButton: true,
          timer: 3000
      }) 
      var planes1=('Usted cuenta con el plan de 6 meses de suscripcion como Usuario');
      localStorage.setItem("plan",planes1);
    }
    const Plan2 =()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usted a comprado el plan 2 como Usuario',
            showConfirmButton: true,
            timer: 3000
        }) 
        var planes2=('Usted cuenta con el plan de 12 meses de suscripcion como Usuario')
        localStorage.setItem("plan",planes2);
    }
    const Plan3 =()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usted a comprado el plan 1 como Promotor',
            showConfirmButton: true,
            timer: 3000
        }) 
        var planes3=('Usted cuenta con el plan de 6 meses de suscripcion como Promotor')
        localStorage.setItem("plan",planes3);
    }
    const Plan4 =()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usted a comprado el plan 2 como Promotor',
            showConfirmButton: true,
            timer: 3000
        }) 
        var planes4=('Usted cuenta con el plan de 12 meses de suscripcion como Promotor')
        localStorage.setItem("plan",planes4);
    }
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
             Plan1={Plan1}  
             Plan2={Plan2}           
             Plan3={Plan3}           
             Plan4={Plan4}         
          />
          )}
          
        </div>
        
  )
}

export default Verification;