import React from "react";
import AdminProduct from './adminProduct';

export default function PicturesPart(){
    return(
        <>
        <div className="admin-main-content-box">
                                <div className="admin-main-content-line admin-main-content-line-dl">
                                    <div className="admin-main-content-product-box">
                                        <p className="admin-main-content-line-text">Name</p>
                                    </div>
                                    <div className="admin-main-content-product-box">
                                        <p className="admin-main-content-line-text">Artist</p>
                                    </div>
                                    <div className="admin-main-content-product-box">
                                        <p className="admin-main-content-line-text">Material</p>
                                    </div>
                                    <div className="admin-main-content-product-box">
                                        <p className="admin-main-content-line-text">Size</p>
                                    </div>
                                    <div className="admin-main-content-product-box">
                                        <p className="admin-main-content-line-text">Description</p>
                                    </div>
                                    <div className="admin-main-content-product-box">
                                        <p className="admin-main-content-line-text">price</p>
                                    </div>
                                </div>
                                <AdminProduct />
                            </div>
        </>
    )
}