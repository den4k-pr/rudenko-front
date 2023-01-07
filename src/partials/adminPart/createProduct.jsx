import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CreateInputs } from "./createIptuts";
import { useDispatch, useSelector } from 'react-redux';
import { createPlane, resetPlaneErrors } from "../../store/plane/planeSlice";
import { getPainters } from '../../store/painters/paintersSlice';
import { getCategories } from "../../store/categories/categoriesSlice";

const CreateProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState("")
    const [ name, setName ] = useState("")
    const [ category, setCategory ] = useState("")
    const [ materials, setMaterials ] = useState("")
    const [ size, setSize ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ image, setImage ] = useState("")

    const handleCreatePlane = useCallback(() => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("name", name);
        formData.append("category", category);
        formData.append("materials", materials);
        formData.append("size", size);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image);

        dispatch(createPlane(formData)).then((res) => {
            if (!res.error) {
              navigate(`product/${res.payload._id}`, { replace: true });
            }
          });
    }, [title, name, category, materials, dispatch, navigate, size, description, price, image])

    useEffect(() => () => dispatch(resetPlaneErrors()),[dispatch])


    const { painters } = useSelector((state) => state.painters);
    const { categories } = useSelector((state) => state.categories);


    useEffect(() => {
        dispatch(getPainters())
        dispatch(getCategories())
    }, [dispatch]);

    return(
            <>
                <div className="ownModal-fon">
                    <form className="ownModal-content">
                    <h3 className="ownTitle">Create product</h3>
                        <p className="admin-main-content-line-text">Title</p>
                        <input
                            type = "text"
                            name = "title"
                            onChange={(e) => setTitle(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <p className="admin-main-content-line-text">Name</p>
                        <select onChange={(e) => setName(e.target.value)} name="name" id="cars">
                            <option className="hide-option">Choose artist</option>
                            {
                                painters && painters.map(option => (
                                    <option onChange={(e) => setName(e.target.value)} value={option.name}>{option.name}</option>
                                ))
                            }
                        </select>
                        <select onChange={(e) => setCategory(e.target.value)} name="category" id="cars">
                            <option className="hide-option">Choose category</option>
                            {
                                categories && categories.map(cat => (
                                    <option onChange={(e) => setCategory(e.target.value)} value={cat.tab}>{cat.tab}</option>
                                ))
                            }
                        </select>
                        <p className="admin-main-content-line-text">Materials</p>
                        <input
                            type = "text"
                            name = "materials"
                            onChange={(e) => setMaterials(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <p className="admin-main-content-line-text">Size</p>
                        <input
                            type = "text"
                            name = "size"
                            onChange={(e) => setSize(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <p className="admin-main-content-line-text">Description</p>
                        <textarea
                            type = "text"
                            name = "description"
                            onChange={(e) => setDescription(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <p className="admin-main-content-line-text">Price</p>
                        <input
                            type = "text"
                            name = "price"
                            onChange={(e) => setPrice(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <p className="admin-main-content-line-text">Image</p>
                        <input
                            type = "text"
                            name = "image"
                            onChange={(e) => setImage(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <button onClick={handleCreatePlane} className="ownChange">Create</button>
                        <Link to="/admin" className="ownBack">Back</Link>
                    </form>
                </div>
            </>
    )
}

export default CreateProduct;
