import React, { useEffect } from 'react';
import '../styles/artists.css';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPainters } from '../store/painters/paintersSlice';
import Header from "../partials/header";

const Artists = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { painters } = useSelector((state) => state.painters);

    useEffect(() => {
        dispatch(getPainters(id))
    }, [dispatch, id]);
    return(
        <>
            <Header />
            <div className="container">
                <div className="artists">
                    <h3 className="artists-title">Artists</h3>
                    {
                        painters && painters.map(obj => (
                            <div key={obj._id} className="artist">
                                <div className="artist-image">
                                    <img src={obj.image} alt="" />
                                    <div className="artist-button-box">
                                        <Link to="/artists/modal" key={obj._id} className="we__works">to order</Link>
                                        <button className="we__works2">all works</button>
                                    </div>
                                </div>
                                <div className="artist-info">
                                    <h3 className="artist-info-name">{obj.name}</h3>
                                    <p className="artist-info-city">{obj.city}</p>
                                    <p className="artist-info-description">{obj.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Artists;
