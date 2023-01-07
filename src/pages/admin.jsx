import React from "react";
import '../styles/admin.css';
import { Routes, Route, Link } from "react-router-dom";
import {removeUser} from '../store/slices/userSlice';
import {useDispatch} from 'react-redux';
import PicturesPart from "../partials/adminPart/Pictures";

export default function Admin(){

    const dispatch = useDispatch();
    return(
        <>
            <div className="admin-header">
                <div className="container">
                    <Link to="/" className="header-body_logo">rudenko art pro</Link>
                    <img className="logout" onClick={()=> dispatch(removeUser())} src="../images/logout.png" alt="" />
                </div>
            </div>
            <div className="container">
                <div className="adminpict-box">
                    <h2 className="admin-title">Pictures</h2>
                    <div className="admin-main-top-box">
                        <Link to="/admin/CreateProduct" className="admin-main-top-box-create">Create product</Link>
                        
                    </div>
                </div>
                <div className="admin-fon"></div>
                <div className="admin-body">
                    <div className="admin-sitebar">
                        <p className="admin-sitebar-link active">Pictures</p>
                        <Link to="/admin/painters" className="admin-sitebar-link">Painters</Link>
                    </div>
                    <div className="admin-main">
                        <div className="admin-main-top">
                        </div>
                        <div className="admin-main-content">
                                <Routes>
                                    <Route path="/" element={<PicturesPart/>}/>
                                </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
