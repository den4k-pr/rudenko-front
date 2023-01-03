import React from 'react';
import '../styles/login.css';
import { LoginForm } from '../components/Login';
import { useAuth } from '../hooks/use-auth';
import Admin from './admin';


export default function Login(){
    const {isAuth} = useAuth();

    return isAuth ? (
        <>
            <Admin/>
        </>
    ) : (
        <>
        <div className="container">
            <div className="login-body">
                <div className="login-content">
                    <LoginForm/>
                </div>
            </div>
        </div>
        <div className="login-fon"></div>
        </>
    )
}