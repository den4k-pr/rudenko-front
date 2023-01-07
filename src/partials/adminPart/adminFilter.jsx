import React from "react";
import '../../styles/admin.css';
import { Link } from "react-router-dom";
import {removeUser} from '../../store/slices/userSlice';
import {useDispatch} from 'react-redux';
import FilterPart from "./Filters";


const AdminFilter = () => {

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
                    <h2 className="admin-title">Painters</h2>
                    <div className="admin-main-top-box">
                        <Link to="/CreateCategory" className="admin-main-top-box-filter">Filter</Link>
                    </div>
                </div>
                <div className="admin-fon"></div>
                <div className="admin-body">
                    <div className="admin-sitebar">
                        <Link to="/admin" className="admin-sitebar-link">Pictures</Link>
                        <Link to="/admin/painters" className="admin-sitebar-link">Painters</Link>
                        <p className="admin-sitebar-link active">Filter</p>
                    </div>
                    <div className="admin-main">
                        <div className="admin-main-top">
                        </div>
                        <div className="admin-main-content">
                            <FilterPart/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminFilter;
