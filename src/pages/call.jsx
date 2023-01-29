import React, { useRef } from "react";
import Header from "../partials/header";
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser'

const Call = () => {
    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3nztyyi',
        'template_8ml26ho', form.current,
        'mgGge6lFl89jokMfs')
            .then((result) => {
                console.log(result.text);
                navigate('/artists')
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return(
        <>
            <Header />
            <div className="form-body">
                <form
                 ref={form}
                 onSubmit={sendEmail} 
                 className="artist-form">
                    <h3 className="call_title">Send your CV for further cooperation</h3>
                    <input placeholder="Write  your email" type="email" name="call_email" required/>
                    <textarea id="call-m" name="call_message" type="text" placeholder="Write  your properties" required></textarea>
                    <button type="submit">send</button>
                </form>
                <Link to="/artists" className="form-fon"></Link>
            </div>
        </>
    )
}

export default Call;
