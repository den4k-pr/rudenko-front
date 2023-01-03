import React from "react";

export const CreateInputs = ({
    type = "text",
    name = "",
    onChange = () => null,
    error = "",
}) => {
    return(
        <>
            <input
                type = { type }
                name = {name}
                onChange = {onChange}
                className = "ownModal-content-input"
            />
            { error && <span className="inputError">{ error }</span> }
        </>
    )
}