import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../partials/header';
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from '../store/planes/planesSlice';
import { getCategories } from '../store/categories/categoriesSlice';
import Footer from '../partials/footer';

const Paintings = () => {
    const [openCategories, setOpenCategories] = useState(false)
    const [choseType, setChoseType] = useState()
    const [choseBoolean, setChoseBoolean] = useState(true)

    const dispatch = useDispatch();
    const { planes } = useSelector((state) => state.planes);
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getPlanes())
        dispatch(getCategories())
    }, [dispatch]);
    return(
        <>
            <Header />
            
            <main className="main">
                <div className="container">
                    <h1 className="main_title">Paintings</h1>
                </div>
                <div className="container">
                    <p onClick={() => setOpenCategories(!openCategories)} className="categories-link categories-link-mob">Choose category</p>
                    <div className={openCategories === true ? "categories" : "categories hide"}>
                        <p onClick={() => setChoseBoolean(true)} className="categories-link">All</p>
                            {
                                categories && categories.map(category => (
                                    <p onClick={() => setChoseType(category.tab, setChoseBoolean(false))} className="categories-link">{category.tab}</p>
                                ))
                            }
                    </div>
                    <div className="testBlok">
                    {
                    planes && planes.map(obj => (
                        <Link to={"/product/" + obj._id} key={obj._id} className={ choseType === obj.category || choseBoolean === true ? "main-slider-slide" : "hide"}>
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

export default Paintings;
