import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../partials/cartItem';
import { clearItems } from '../store/cart/cartSlice';
import { Link } from 'react-router-dom';

function Header() {
    const [burger, setBurger] = useState(false);
    const [bascet, setBascet] = useState(false);

    const items = useSelector((state) => state.cart.items);

    const {totalPrice} = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const onClickClear = () => {
        if (window.confirm('Clear buscket?')){
            dispatch(clearItems())
        }
    }
    
    

    return(
        <header>
            <div onClick={() => setBurger(false)} className={ burger === true ? "header__fon" : "header__fon hed-hide"}></div>
            <div onClick={() => setBascet(false)} className={ bascet === true ? "header__fon" : "header__fon hed-hide"}></div>
            <div className="wrapper">
                <div className="header-body">
                    <div className="header-body-wrap">
                        <div className={ bascet === true ?  "bascet" : "hed-hide"}>
                            <span className="crear__buscet" onClick={onClickClear}>clear buscket</span>
                            
                            <div className="bascet-content">
                                {
                                    items.map(item => 
                                        <>
                                        <CartItem key={item.id} {...item} />
                                        </>
                                    )
                                }
                            </div>
                            <div className="bascet-box">
                                <Link to="/modal" className="buscet-button">design</Link>
                                <p className="all__price">{totalPrice} $</p>
                            </div>
                        </div>
                        <Link to="/" className="header-body_logo">rudenko art pro</Link>
                        <div className="header-body-box">
                            <div className={burger === true ? "burger-list-show" : "burger-list-hide" } id="burger-list-show">
                                <ul id="header-body-box-list">
                                    <li>
                                        <Link to="/paintings" className="header-body-box-list_link">Paintings </Link>
                                    </li>
                                    <li>
                                        <Link to="/artists" className="header-body-box-list_link">Artists</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="search_body">
                                <input type="text" onChange={(event) => setValue(event.target.value)}/>
                                <div className="search"></div>
                            </div>
                            <div onClick={() => setBascet(!bascet)} className="busket"><span className="length">{items.length}</span></div>
                            <div onClick={() => setBurger(!burger)} id="burger" className={burger === !false ? "active" : "" }>
                                <div className="burger-box">
                                    <div className="burger-line-1"></div>
                                    <div className="burger-line-2"></div>
                                    <div className="burger-line-3"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
