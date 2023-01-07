import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../store/categories/categoriesSlice';
import { deleteCategories } from "../../store/services/categoriesService";


export default function AdminPaintersPainters(){

    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categories);


    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);


    return(
        <>
        {
            categories && categories.map(category => (
                <div key={category._id} className="admin-main-content-product">
                    <div className="admin-main-content-product-box">
                        <p className="admin-main-content-line-text">{category.tab}</p>
                    </div>
                    <button onClick={() => deleteCategories(category._id)} id="removeBtn" className="admin-main-content-product-del" >
                    </button>
                </div>
            ))
        }
        </>
    )
}
