import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../partials/cartItem';
import { clearItems } from '../store/cart/cartSlice';
import { Link, useSearchParams } from 'react-router-dom';
import { getPlanes } from '../store/planes/planesSlice';

function Header() {
    const [burger, setBurger] = useState(false);
    const [bascet, setBascet] = useState(false);
    const [input, setInput] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');

    const items = useSelector((state) => state.cart.items);

    const {totalPrice} = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const onClickClear = () => {
        if (window.confirm('Clear buscket?')){
            dispatch(clearItems())
        }
    }
    
    const { planes } = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch]);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({post: query})
  }

  const postQuery = searchParams.get('post') || '';

  useEffect(() => {
    fetch('https://rudenko-back-production.up.railway.app/api/planes/')
        .then(res => res.json())
        .then(data => setPosts(data))
  })

   
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
                                        <CartItem key={item._id} {...item} />
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
                                    <li>
                                        <Link to="/call" className="header-body-box-list_link">call out for artists</Link>
                                    </li>
                                </ul>
                            </div>
                            <form autoCapitalize='off' onSubmit={handleSubmit}>
                            <div onClick={() => setInput(true)} className={input === false ? "search_body" : "search_body search_body-show"}>
                                <input autocomplete="off" name="search" className={input === false ? "input-hide" : "input-show"} type="text"/>
                                <input className={input === true ? "button-search" : "hide"} name="submit" type="submit" value="Search"/>
                                <div className={input === false ? "search" : "hide"}></div>
                            </div>
                            <div className={input === true ? "search-list" : "hide"}>
                                {
                                    posts.filter(
                                        post => post.title.includes(postQuery)
                                    ).map(post => (
                                        <Link to={"/product/" + post._id} key={post._id}>
                                            <p className="search-list-link">{post.title}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                            </form>
                            <div onClick={() => setInput(false)} className={input === false ? "" : "search-fon"}></div>
                            <div onClick={() => setBascet(!bascet)} className={input === false ? "busket" : "hide"}><span className="length">{items.length}</span></div>
                            <div onClick={() => setBurger(!burger)} id={input === false ? "burger" : "hide"} className={burger === !false ? "active" : "" }>
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
