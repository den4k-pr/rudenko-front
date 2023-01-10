import React, { useState, useCallback, useEffect } from "react";
import { CreateInputs } from "./createIptuts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createPainter, resetPainterErrors } from "../../store/painter/painterSlice";

const CreatePainters = () => {
    const dispatch = useDispatch();
    const { errors } = useSelector(state => state.plane);
    const [ name, setName ] = useState("")
    const [ city, setCity ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ image, setImage ] = useState("")

    const handleCreatePainter = useCallback(() => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("city", city);
        formData.append("description", description);
        formData.append("image", image);

        dispatch(createPainter(formData));
    }, [name, city, description, image])

    useEffect(() => () => dispatch(resetPainterErrors()),[dispatch])

    return(
            <>
                <div className="ownModal-fon">
                    <form className="ownModal-content">
                    <h3 className="ownTitle">Create product</h3>
                        <p className="admin-main-content-line-text">Name</p>
                        <CreateInputs
                            name="name"
                            error={ errors && errors.title && errors.title.message }
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className="admin-main-content-line-text">City</p>
                        <CreateInputs
                            name="city"
                            error={ errors && errors.name && errors.name.message }
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <p className="admin-main-content-line-text">description</p>
                        <textarea
                            type = "text"
                            name = "description"
                            onChange={(e) => setDescription(e.target.value)}
                            className = "ownModal-content-input"
                        />
                        <p className="admin-main-content-line-text">image</p>
                        <CreateInputs
                            name="image"
                            error={ errors && errors.name && errors.name.message }
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <button onClick={handleCreatePainter} className="ownChange">Create</button>
                        <Link to="/admin" className="ownBack">Back</Link>
                    </form>
                </div>
            </>
    )
}

export default CreatePainters;
