import React from "react";
import "../styles/product.css";

const Room = ( {getBack, roomImg, roomSize} ) => {
    return(
            <>
            <p onClick={() => getBack(true)} className="info-product-back"></p>
            <div className="room">
                <img src={roomImg} alt="" className="room-img" />
                <p className="room-size">{roomSize} ft</p>
            </div>
        </>
    )
}

export default Room;