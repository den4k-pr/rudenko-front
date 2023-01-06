import React, { 
    //useEffect,
     useState } from "react";
import Header from "../header";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getPainters } from "../../store/painters/paintersSlice";
// import { getCategories } from "../../store/categories/categoriesSlice";
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

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







// import React, { useEffect, useState } from "react";
// import Header from "../header";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getPainters } from "../../store/painters/paintersSlice";
// import { getCategories } from "../../store/categories/categoriesSlice";
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

// const OrderOwn = () => {
//     const [email, setemail] = useState("");
//     const [properties, setProperties] = useState("");
//     const [loading, setLoading] = useState(false);

//     const dispatch = useDispatch();
//     const { painters } = useSelector((state) => state.painters);
//     const { categories } = useSelector((state) => state.categories);
  
//     useEffect(() => {
//       dispatch(getPainters());
//       dispatch(getCategories());
//     }, [dispatch]);
    
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         if (!email || !properties) {
//             return toast.error('Please fill email, subject and message');
//         }
//         try {
//             setLoading(true);
//             const { data } = await axios.post(`sandbox966792d89f1c42af8ea4aca8c90c5006.mailgun.org/api/email`, {
//               email,
//               properties,
//             });
//             setLoading(false);
//             toast.success(data.properties);
//           } catch (err) {
//             setLoading(false);
//             toast.error(
//               err.response && err.response.data.properties
//                 ? err.response.data.properties
//                 : err.properties
//             );
//           }
//     }

//     return(
//         <>
//             <Header />
//             <div className="form-body">
//                 <form onSubmit={submitHandler} className="artist-form">
//                     <input type="email" onChange={(e) => setemail(e.target.value)} placeholder="Write your email"/>
//                     <textarea onChange={(e) => setProperties(e.target.value)} placeholder="Write  your properties"></textarea>
//                     <button>
//                     {loading ? 'sending...' : 'make order'}
//                     </button>
//                 </form>
//                 <ToastContainer />
//                 <Link to="/artists" className="form-fon"></Link>
//             </div>
//         </>
//     )
// }

// export default OrderOwn;
