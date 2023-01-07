import React from "react";
import '../styles/product.css';
import { Link } from "react-router-dom";
import { addItem } from "../store/cart/cartSlice";

const Pr = ({ID, planeImage, title, name, category, materials, size, price}) => {

    const onClickAdd = () => {
        const item = {
            ID,
            planeImage,
            title,
            name,
            price
        };
        dispatch(addItem(item));
    }
    return(
        <>
            <Link to={"/product/" + ID} key={ID} className={ choseType === category || choseBoolean === true ? "main-slider-slide" : "hide"}>
                <img className="main-slider-slide_img" src={image} alt="" />
                <div className="main-slider-textLeft">
                <h3 className="main-slider-slide_name">{title}</h3>
                <p className="main-slider-slide_fio">{name}</p>
                <p className="main-slider-slide_data">{materials}</p>
                <p className="main-slider-slide_size">{size}</p>
                <div className="main-slider-slide__bottom">
                    <p className="main-slider-slide__bottom_price">&#36; {price}</p>
                    <div className="main-slider-slide__bottom-links">
                        <div className="main-slider-slide__bottom-ikons-box1"><img className="main-slider-slide__bottom-ikons-ikon" src="./images/product-searck.png" alt="" /></div>
                        <div onClick={onClickAdd} className="main-slider-slide__bottom-ikons-box2"><img className="main-slider-slide__bottom-ikons-ikon" src="./images/product-busket.png" alt="" /></div>
                    </div>
                </div>
                </div>
            </Link>
        </>
    )
    
}

export default Pr;
