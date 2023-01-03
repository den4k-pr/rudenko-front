import {useState} from 'react';
import { Link } from "react-router-dom";

const Form = ({title}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <div className="login-content-box">
            <h3 className="login-title">Sign in to account</h3>
            <Link to="/" className="product-column-right-back">
                <img className="close" src="../images/close.png" alt="" />
            </Link>
            </div>
            <p className="login-content-text">Email</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="login-content-input" autocomplete="email" />
            <p className="login-content-text">Password</p>
            <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" className="login-content-input" autocomplete="password" />
            <button
            //  onClick={() => handleClick(email, pass)}
             className="login-content-button">{title}</button>
        </>
    )
}

export {Form}