import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlane } from "../../store/plane/planeSlice";
import { Link } from "react-router-dom";

export default function AdminOwnProduct(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const { plane } = useSelector((state) => state.plane);
  
    useEffect(() => {
      dispatch(getPlane(id));
    }, [dispatch, id]);

    return(
        plane && (
            <>
                <div className="info-product">
                    <Link to="/admin" className="info-product-back">
                    </Link>
                    <div className="info-product-content">
                        <h3 className="info-product-content-title">{plane.title}</h3>
                        <img src={plane.image} alt="" className="info-product-content-img" />
                        <div className="info-product-content-box">
                            <div className="info-product-content-text">Painter: {plane.name}</div>
                            <div className="info-product-content-text">Size: {plane.size}</div>
                            <div className="info-product-content-text">Materials: {plane.materials}</div>
                        </div>
                        <h3 className="info-product-content-price">Price: {plane.price} $</h3>
                        <p className="info-product-content-text">Description: {plane.description}</p>
                    </div>
                </div>
            </>
        )
    )
}
