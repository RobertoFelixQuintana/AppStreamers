import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div>
                    <Link to="/Inicio" className="navbar-logo" target="">
                        <img src='Home'
                        alt='LOGO'/>
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
                    <Link to="/Sign" className="navbar-links" target="">
                    <p id="btn-conexion">
                        Icono IniciarSesion
                    </p>
                    </Link>
                </div>   
            </div>          
        </nav>
    )
}

export default Navbar;