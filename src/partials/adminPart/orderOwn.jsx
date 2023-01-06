import React, { 
    //useEffect,
     useState } from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { sendMail } from "./context/Mail";


const OrderOwn = () => {
    const [values, setValues] = useState({
        userEmail: "",
        message: "",
        status: false
    })
    const {userEmail,message,status}=values;
    const handleChange=name=>event=>{
        setValues({...values,[name]:event.target.value})
    }

    const handleSubmit=event=>{
        event.preventDefault();
        console.log("values email",userEmail);
        console.log("values message",message);
        sendMail({userEmail,message})
    }

    // const dispatch = useDispatch();
    // const { painters } = useSelector((state) => state.painters);
    // const { categories } = useSelector((state) => state.categories);
  
    // useEffect(() => {
    //   dispatch(getPainters());
    //   dispatch(getCategories());
    // }, [dispatch]);
    

    return(
        <>
            <Header />
            <div className="form-body">
                <form
                 onSubmit={handleSubmit} 
                 className="artist-form">
                    <input value={userEmail} onChange={handleChange("userEmail")} type="email" placeholder="Write your email"/>
                    <textarea value={message} onChange={handleChange("message")} placeholder="Write  your properties"></textarea>
                    <button type="submit">make order</button>
                </form>
                {
                    status ? <div>message sent seccessfully</div> : <div>error</div>
                }
                <Link to="/artists" className="form-fon"></Link>
            </div>
        </>
    )
}

export default OrderOwn;
