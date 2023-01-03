import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPainters } from '../../store/painters/paintersSlice';
import { deletePainter } from "../../store/services/paintersService";


export default function AdminPaintersPainters(){

    const dispatch = useDispatch();
    const { painters } = useSelector((state) => state.painters);


    useEffect(() => {
        dispatch(getPainters())
    }, [dispatch]);


    return(
        <>
        {
            painters && painters.map(painter => (
                <div key={painter._id} className="admin-main-content-product">
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{painter.name}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{painter.city}</p>
                    </div>
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{painter.description}</p>
                    </div>
                    <button onClick={() => deletePainter(painter._id)} id="removeBtn" className="admin-main-content-product-del" >
                    </button>
                </div>
            ))
        }
        </>
    )
}