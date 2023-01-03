import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from '../../store/planes/planesSlice';
import { deletePlane } from "../../store/services/planesService";
import { Link } from "react-router-dom";


export default function AdminProduct(){

    const dispatch = useDispatch();
    const { planes } = useSelector((state) => state.planes);


    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch]);


    return(
        <>
        {
            planes && planes.map(admObj => (
                <div key={admObj._id} className="admin-main-content-product">
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{admObj.title}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{admObj.name}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{admObj.materials}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{admObj.size}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{admObj.description}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{admObj.price} $</p>
                    </div>
                    <Link to={"/admin/AdminOwnProduct/" + admObj._id} key={admObj._id} className="admin-main-content-product-more">
                        <div className="admin-main-content-product-more-dots">...</div>
                    </Link>
                    <button onClick={() => deletePlane(admObj._id)} id="removeBtn" className="admin-main-content-product-del" >
                    </button>
                </div>
            ))
        }
        </>
    )
}