import React, { useEffect, useRef } from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPainters } from "../../store/painters/paintersSlice";
import { getCategories } from "../../store/categories/categoriesSlice";
import emailjs from '@emailjs/browser'

const OrderOwn = () => {
    const dispatch = useDispatch();
    const { painters } = useSelector((state) => state.painters);
    const { categories } = useSelector((state) => state.categories);
  
    useEffect(() => {
      dispatch(getPainters());
      dispatch(getCategories());
    }, [dispatch]);

    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uw0951x',
        'template_j9atfyn', form.current,
        'B3uHEg9VYxDRxtTJq')
            .the((result) => {
                console.log(result.text);
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
                     <div className="artist-form-box">
                    <select name="user_category">
                        <option className="hide-option">Choose a category</option>
                        {
                            categories && categories.map(category => (
                                <option>{category.tab}</option>
                            ))
                        }
                    </select>
                    <select name="user_painter">
                        <option className="hide-option">Choose an artist</option>
                        {
                            painters && painters.map(painter => (
                                <option>{painter.name}</option>
                            ))
                        }
                    </select>
                    </div>
                    <input name="jjj" value="dsvsvvvvvvvvvvvvvvvvv"/>
                    <input name="user_name" type="text" placeholder="Write your name" required/>
                    <input name="user_email" type="email" placeholder="Write your email" required/>
                    <input name="user_phone" type="phone" placeholder="Write your phone" required/>
                    <textarea name="user_message" type="text" placeholder="Write  your properties"></textarea>
                    <button type="submit">make order</button>
                </form>
                <Link to="/artists" className="form-fon"></Link>
            </div>
        </>
    )
}

export default OrderOwn;
