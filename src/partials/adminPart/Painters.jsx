import React from "react";
import AdminPaintersPainters from './adminPaintersPainters';

export default function PaintersPart(){
    return(
        <>
        <div className="admin-main-content-box">
            <div className="admin-main-content-line">
                <div className="admin-main-content-product-box">
                    <p className="admin-main-content-line-text">Name</p>
                </div>
                <div className="admin-main-content-product-box">
                    <p className="admin-main-content-line-text">City</p>
                </div>
                <div className="admin-main-content-product-box">
                    <p className="admin-main-content-line-text">Description</p>
                </div>
            </div>
            <AdminPaintersPainters />
        </div>
        </>
    )
}