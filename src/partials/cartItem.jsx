import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cart/cartSlice";

const CartItem = ({id, title, price, planeImage}) => {

    const dispatch = useDispatch();

    const onClickRemove = () => {
        if (window.confirm('Are you sure you wont to remove?')) {
            dispatch(removeItem(id));
        }
    }
    console.log(id)
    
    return (
        <div className="bascet-content-product">
            <div className="bascet-content-product-body">
                <img src={planeImage} alt="" className="bascet-content-product-body-img" />
                <div className="bascet-content-product-body-box">
                    <p className="bascet-content-product-body-name">{title}</p>
                    <p className="bascet-content-product-body-price">{price} $</p>
                </div>
            </div>
            <div onClick={onClickRemove} className="bascet-content-product-del" ></div>
        </div>
    )
}
export default CartItem;