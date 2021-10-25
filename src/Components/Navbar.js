import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../Icons/Login-2.png';
import Logo from '../Icons/Logo_3.png';
import './Navbar.css';

const Navbar = () => {
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
                <div className="sign-btn">
                    <Link to="/Perfil" className="navbar-links-btn" target="">
                    <img src={Login} alt="login" width="90rem"></img>
                    </Link>
                </div>   
            </div>          
        </nav>
    )
}

export default Navbar;