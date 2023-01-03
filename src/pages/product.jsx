import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlane } from "../store/plane/planeSlice";
import ProductPart from "./product-part";

const Product = ({ addItem  }) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { plane } = useSelector((state) => state.plane);
  
    useEffect(() => {
      dispatch(getPlane(id));
    }, [dispatch, id]);

    return(
        plane && (
            <>
                <ProductPart ID={plane.id} planeImage={plane.planeImage} title={plane.title} name={plane.name} category={plane.category} materials={plane.materials} description={plane.description} size={plane.size} price={plane.price}/>
            </>
        )
    )
}


export default Product;