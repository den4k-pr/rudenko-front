import React, {useRef} from "react";
import Header from "../header";
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

const BusketForm = () => {
    
    const form = useRef();
    const items = useSelector((state) => state.cart.items);

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
                    {
                       items.map(item => 
                          <>
                            <input name="pr_title" value={" " + item.title + " "} type="hidden" placeholder="Write your Full name" required/>
                            <input name="pr_name" value={" " + item.name + " "} type="hidden" placeholder="Write your Full name" required/>
                            <input name="pr_price" value={" " + item.price + "$" + " "} type="hidden" placeholder="Write your Full name" required/>
                          </>
                       )
                    }
                    <input name="client_fullName" type="text" placeholder="Write your Full name" required/>
                    <input name="client_email" type="email" placeholder="Write your email" required/>
                    <input name="client_phone" type="text" placeholder="Write your phone" required/>
                    <select className="states" name="client_state" id="">
                        <option>Choose State</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                    </select>
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
