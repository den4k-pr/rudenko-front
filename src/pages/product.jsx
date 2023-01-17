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
                <ProductPart image_gal_2={plane.image2} image_gal_3={plane.image3} image_gal_4={plane.image4} image_gal_5={plane.image5} ID={plane.id} planeImage={plane.image} title={plane.title} name={plane.name} category={plane.category} materials={plane.materials} description={plane.description} size={plane.size} price={plane.price}/>
            </>
        )
    )
}


export default Product;
