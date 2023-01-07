port React from "react";
import AdminFiltersFilter from './AdminFiltersFilter';

export default function PaintersPart(){
    return(
        <>
        <div className="admin-main-content-box">
            <div className="admin-main-content-line">
                <div className="admin-main-content-product-box">
                    <p className="admin-main-content-line-text">Filter</p>
                </div>
            </div>
            <AdminFiltersFilter />
        </div>
        </>
    )
}
