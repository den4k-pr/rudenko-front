import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../partials/header';
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from '../store/planes/planesSlice';
import { getCategories } from '../store/categories/categoriesSlice';
import Footer from '../partials/footer';
import Pr from './pr';

const Paintings = () => {
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
                    <div className="categories">
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
                        <Pr ID={obj._id} title={obj.title} name={obj.name} materials={obj.materials} size={obj.size} price={obj.price}/>
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
