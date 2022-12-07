import { useState, useEffect } from "react";
/* import { signUp } from "../helpers/signUp"; */


export const SignUp = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect( () => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '556630088210-j00tptsmnast1kc4csb0oap1cudq8h29.apps.googleusercontent.com',
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('google-btn'),
            { theme : 'outline', size: 'large'}
        );
    }, []);

    const handleCallbackResponse = (response) => {
        console.log("Encoded JWT: " + response.credential);
    }

    const { username, email, password, confirmPassword } = formState;

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return console.log("Passwords do not match");
        }
        /* signUp(username, email, password); */
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center">
                <h2 >Registrate</h2>
            </div>
            <input 
                type="text" 
                className="form-control mt-3"
                placeholder="Nombre" 
                name="name"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                className="form-control mt-3"
                placeholder="Correo@electronico.com"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                className="form-control mt-3"
                placeholder="Contraseña" 
                name="password"
                value={password}
                onChange={handleChange}
            />
            <input 
                type="password" 
                className="form-control mt-3"
                placeholder="Confirma Contraseña" 
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
            />
            <button className='submit-btn mt-3' onClick={handleSubmit}>Sign up</button>
            <div class="strike mt-3">
                <span>Or</span>
            </div>
            <div className="social-buttons mt-3 justify-content-center align-items-center">
                <div id="google-btn" className="google-btn">
                    {/* <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text"><b>Iniciar Sesión con google</b></p> */}
                </div>
            </div>
        </>
    )
}
