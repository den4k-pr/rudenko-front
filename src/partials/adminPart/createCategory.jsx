import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { createCategory, resetCategoryErrors } from "../../store/category/categorySlice"

const CreateCategory = () => {
    const dispatch = useDispatch();
    const [ tab, setTab ] = useState("")

    const handleCreateCategory = useCallback(() => {
        const formData = new FormData();
        formData.append("tab", tab);

    dispatch(createCategory(formData));
    }, [tab])

    useEffect(() => () => dispatch(resetCategoryErrors()),[dispatch])

    return(
            <>
                <div className="ownModal-fon">
                    <form className="ownModal-content">
                    <h3 className="ownTitle">Create product</h3>
                        <p className="admin-main-content-line-text">Title</p>
                        <input
                            type = "text"
                            name = "tab"
                            onChange={(e) => setTab(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <button onClick={handleCreateCategory} className="ownChange">Create</button>
                        <Link to="/admin" className="ownBack">Back</Link>
                    </form>
                </div>
            </>
    )
}

export default CreateCategory;