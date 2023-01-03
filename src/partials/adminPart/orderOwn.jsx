import React from "react";
import Header from "../header";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getPainters } from "../../store/painters/paintersSlice";
// import { getCategories } from "../../store/categories/categoriesSlice";
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

const OrderOwn = () => {
    // const [email, setemail] = useState("");
    // const [properties, setProperties] = useState("");
    // const [paintersOption, setPaintersOption] = useState("");
    // const [CategoriesOption, setCategoriesOption] = useState("");
    // const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch();
    // const { painters } = useSelector((state) => state.painters);
    // const { categories } = useSelector((state) => state.categories);
  
    // useEffect(() => {
    //   dispatch(getPainters());
    //   dispatch(getCategories());
    // }, [dispatch]);
    
    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if (!email || !properties || !paintersOption || !CategoriesOption) {
    //         return toast.error('Please fill email, subject and message');
    //     }
    //     try {
    //         setLoading(true);
    //         const { data } = await axios.post(`https://rudenko.up.railway.app/api/email`, {
    //           email,
    //           properties,
    //           paintersOption,
    //           CategoriesOption,
    //         });
    //         setLoading(false);
    //         toast.success(data.properties);
    //       } catch (err) {
    //         setLoading(false);
    //         toast.error(
    //           err.response && err.response.data.properties
    //             ? err.response.data.properties
    //             : err.properties
    //         );
    //       }
    // }

    return(
        <>
            <Header />
            <div className="form-body">
                <form
                //  onSubmit={submitHandler} 
                 className="artist-form">
                    {/* <div className="artist-form-box">
                    <select onChange={(e) => setCategoriesOption(e.target.value)}>
                        {
                            categories && categories.map(category => (
                                <option value={(e) => setCategoriesOption(e.target.value)} onChange={(e) => setCategoriesOption(e.target.value)}>{category.tab}</option>
                            ))
                        }
                    </select>
                    <select onChange={(e) => setPaintersOption(e.target.value)}>
                        {
                            painters && painters.map(painter => (
                                <option value={(e) => setPaintersOption(e.target.value)} onChange={(e) => setPaintersOption(e.target.value)}>{painter.name}</option>
                            ))
                        }
                    </select>
                    </div>
                    <input type="email" onChange={(e) => setemail(e.target.value)} placeholder="Write your email"/>
                    <textarea onChange={(e) => setProperties(e.target.value)} placeholder="Write  your properties"></textarea> */}
                    <button>
                    make order
                    </button>
                </form>
                <Link to="/artists" className="form-fon"></Link>
            </div>
        </>
    )
}

export default OrderOwn;