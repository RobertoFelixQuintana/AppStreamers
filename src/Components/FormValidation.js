import React from 'react';

const FormValidation = (props) => {
    const {
        email,
        setEmail, 
        password ,
        setPassword,
        HandleLogin,
        HandleLogout,
        HandleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (   
        <section className='section-container'>

            <div className='container-form'>
                <div className='container-data'>

                    <label>Correo</label><br></br>
                    <input
                        className='controls'
                        type='email'
                        value={email}
                        placeholder='Write your email'
                        onChange={(e) => setEmail(e.target.value)}
                    /><p>{emailError}</p>

                    <label>Password</label><br>
                    </br>
                    <input
                      className='controls'
                      type='password'
                      value={password}
                      placeholder='Write your password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{passwordError}</p>
                </div>

                <div className='container-btn'>
                    {hasAccount ? (
                        <>
                        <button onClick={HandleLogin}>Login</button>
                        
                        <p>Dont have account <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>

                    ) : (
                        <>
                        <button onClick={HandleSignup}>Sign up</button>
                        <p>Have an account <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
                        </>
                    )}

                </div>

            </div>

        </section>
    )
}

export default FormValidation;