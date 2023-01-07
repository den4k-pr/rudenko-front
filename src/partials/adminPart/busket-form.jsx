import React from "react";
import Header from "../header";
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const BusketForm = () => {
    
    const form = useRef();

    const navigate = useNavigate();
    const sendCart = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uw0951x',
        'template_2dqmqbj', form.current,
        'B3uHEg9VYxDRxtTJq')
            .then((result) => {
                console.log(result.text);
                navigate('/')
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
                 onSubmit={sendCart} 
                 className="artist-form">
                    <div className="artist-form-box">
                    </div>
                    <input name="client_fullName" type="email" placeholder="Write your Full name" required/>
                    <input name="client_email" type="email" placeholder="Write your email" required/>
                    <input name="client_phone" type="text" placeholder="Write your phone" required/>
                    <select name="client_state" id=""></select>
                    <input name="client_addresses" type="text" placeholder="Write your addresses" required/>
                    <input name="client_index" type="number" placeholder="Write your index" required/>
                    <textarea name="client_properties" type="text" placeholder="Write your properties" required></textarea>
                    <button>make order</button>
                </form>
                <Link to="/" className="form-fon"></Link>
            </div>
        </>
    )
}

export default BusketForm;
