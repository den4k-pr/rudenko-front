import React, {useState} from "react";
import { useDispatch } from "react-redux";

const CartItem = ({id, title, price, planeImage}) => {
    const [delItem, setDelItem] = useState(true);
    
    console.log(id)
    
    return (
        <div className={delItem === true ? "bascet-content-product" : "hide"}>
            <div className="bascet-content-product-body">
                <img src={planeImage} alt="" className="bascet-content-product-body-img" />
                <div className="bascet-content-product-body-box">
                    <p className="bascet-content-product-body-name">{title}</p>
                    <p className="bascet-content-product-body-price">{price} $</p>
                </div>
            </div>
            <div onClick={() => setDelItem(false)} className="bascet-content-product-del" ></div>
        </div>
    )
}
export default CartItem;
