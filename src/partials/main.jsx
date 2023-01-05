import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from "../partials/footer";
import Header from './header';
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from '../store/planes/planesSlice';

export default function Main() {

    const dispatch = useDispatch();
  const { planes } = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch]);
    return(
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <h1 className="main_title">Featured Paintings</h1>
                </div>
                <div className="container">
                    <div className="testBlok">
                    {
                    planes && planes.map(obj => (
                        <Link to={"/product/" + obj._id} key={obj._id} className="main-slider-slide">
                            <img className="main-slider-slide_img" src={obj.image} alt="" />
                            <div className="main-slider-textLeft">
                            <h3 className="main-slider-slide_name">{obj.title}</h3>
                            <p className="main-slider-slide_fio">{obj.name}</p>
                            <p className="main-slider-slide_data">{obj.materials}</p>
                            <p className="main-slider-slide_size">{obj.size}</p>
                            <div className="main-slider-slide__bottom">
                                <p className="main-slider-slide__bottom_price">&#36; {obj.price}</p>
                                <div className="main-slider-slide__bottom-links">
                                    <div className="main-slider-slide__bottom-ikons-box1"><img className="main-slider-slide__bottom-ikons-ikon" src="./images/product-searck.png" alt="" /></div>
                                    <div className="main-slider-slide__bottom-ikons-box2"><img className="main-slider-slide__bottom-ikons-ikon" src="./images/product-busket.png" alt="" /></div>
                                </div>
                            </div>
                            </div>
                        </Link>
                    ))
                }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
