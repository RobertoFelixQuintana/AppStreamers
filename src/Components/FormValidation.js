import React from 'react';
import './FormValidation.css';

const FormValidation = (props) => {
    const {
        email,
        setEmail, 
        password ,
        setPassword,
        HandleLogin,
        HandleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        Plan1,
        Plan2,
        Plan3,
        Plan4
    } = props;

    return (   
        <div className='containerFormData'>
            <div className="Formulario">
                <div className='containerFormData-info'>
                {hasAccount ? (
                    <h3>Iniciar sesion</h3>
                ):
                (                
                    <h3>Crear cuenta</h3>
                )}
                
                    <label><b>Correo</b></label><br></br>
                    <input
                        className='controls-data'
                        type='email'
                        value={email}
                        placeholder='Escribe tu correo electronico'
                        onChange={(e) => setEmail(e.target.value)}
                    /><p>{emailError}</p>

                    <label><b>Password</b></label><br>
                    </br>
                    <input
                      className='controls-data'
                      type='password'
                      value={password}
                      placeholder='Escribe tu contraseña'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{passwordError}</p>
                </div>

                <div className='containerFormData-btn'>
                    {hasAccount ? (
                        <>

                        <button onClick={HandleLogin}>Iniciar sesion</button>

                        <p> ¿No tienes cuenta? <span onClick={() => setHasAccount(!hasAccount)}> <b>Crea una aqui.</b></span></p>
                        </>

                    ) : (
                        <>
                        <button onClick={HandleSignup}>Crear cuenta</button>
                        <p>¿Cuentas con una cuenta?<span onClick={() => setHasAccount(!hasAccount)}> <b>Ingresa aqui.</b></span></p>
                        </>
                    )}
                </div>            
            </div>
            
            <div className="containerBannerForm"> 
                <div className="banner">
                    <div className="titleBanner">
                        <h3>Elige un plan para ti</h3>
                    </div>
                    <div className="promociones">
                        <div className="promocion1 promocionContent">
                            <h4>Plan 1</h4>
                            <p><b>Plan de 6 meses en el cual tendras acceso 
                                a todas las opciones de la pagina disponibles sin restricciones.
                            </b></p>
                            <span><b>$150.00 pesos</b></span>
                            <button className="boton1" onClick={Plan1}>Comprar como usuario</button>
                            <button className="boton2" onClick={Plan3}>Comprar como patrocinador</button>
                        </div>
                        <div className="promocion2 promocionContent">
                            <h4>Plan 2</h4>
                            <p><b>Plan de 12 meses en el cual tendras acceso 
                                a todas las opciones de la pagina disponibles sin restricciones.
                            </b></p>
                            <span><b>$250.00 pesos</b></span>
                            <button className="boton1" onClick={Plan2}>Comprar como usuario</button>
                            <button className="boton2" onClick={Plan4}>Comprar como patrocinador</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormValidation;