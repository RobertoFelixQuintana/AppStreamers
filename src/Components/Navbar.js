import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Icons/Logo_3.png';
import './Navbar.css';
import fire from '../Firebase/FirebaseConfig';
import LogoCuenta from '../Icons/Cuenta.png';
import Swal from 'sweetalert2'

const Navbar = () => {
    const HandleLogout = () => {
        if(document.getElementById("Log").innerText==="Logout"){
            fire.auth().signOut()
           .then(()=>{
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'Has cerrado sesion correctamente',
                    showConfirmButton: true,
                    timer: 3000
                  }) 
           })
           .catch((error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Sucedio algun problema...',
                    showConfirmButton: false,
                    timer: 3000
                }) 
          });
        }         
      }
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div>
                    <Link to="/Inicio" className="navbar-logo" target="">
                        <img src={Logo} width="95rem" alt='Logo'/>
                    </Link>
                </div>
                <div>
                    <Link to="/Inicio" className="navbar-links" target="">
                    Inicio
                    </Link>
                </div>
                <div>
                    <Link to="/QuienesSomos" className="navbar-links" target="">
                    Nuestra Empresa    
                    </Link>
                </div>      
                <div>
                    <Link to="/PreguntasFrecuentes" className="navbar-links" target="">
                    Preguntas Frecuentes    
                    </Link>
                    
                </div>               
            </div>

            <div className="navbarContainer-btn">
                <div className="sign-btn-Login">
                    <Link to="/Perfil" id="Login" className="navbar-links-btn" target=""> 
                        <img src={LogoCuenta} alt="logo-cuenta" width ="45rem"></img>
                    </Link>
                </div>
                <div className="sign-btn"> 
                    <button type="button" id="Log" className="btnLogin" onClick={HandleLogout} 
                    >Login</button>
                </div>   
            </div>          
        </nav>
    )
}

export default Navbar;