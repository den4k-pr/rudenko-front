import React from 'react';
// import {useDispatch} from 'react-redux';
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
// import {setUser} from '../store/slices/userSlice';

const LoginForm = () => {
    // const dispatch = useDispatch();
    
    // const handleLogin = (email, password) => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(({user}) => {
    //             console.log(user);
    //             dispatch(setUser({
    //                 email: user.email,
    //                 id: user.uid,
    //                 token: user.accessToken,
    //             }));
    //         })
    // }

    return (
        <Form
            title="sign in"
            // handleClick={handleLogin}
        />
    )
}

export {LoginForm}