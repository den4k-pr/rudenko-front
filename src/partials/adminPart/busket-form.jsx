import React, {useState} from "react";
import Header from "../header";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const BusketForm = () => {
    // const [buskTitle, setBuskTitle] = useState("");
    // // const [buskTitle1, setBuskTitle1] = useState("");
    // // const [buskTitle2, setBuskTitle2] = useState("");
    // const [buskPrice, setBuskPrice] = useState("");
    // const [buskPrice1, setBuskPrice1] = useState("");
    // const [buskPrice2, setBuskPrice2] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // const items = useSelector((state) => state.cart.items);

    const submitBusket = async (e) => {
        e.preventDefault();
        if (!phone || !email || !message) {
            return toast.error('Please fill email, subject and message');
        }
        try {
            setLoading(true);
            const { dataBusket } = await axios.post(`/api/busket`, {
                email,
                phone,
                message,
            });
            setLoading(false);
            toast.success(dataBusket.message);
          } catch (err) {
            setLoading(false);
            toast.error(
              err.response && err.response.dataBusket.message
                ? err.response.dataBusket.message
                : err.message
            );
          }
    }

    return(
        <>
            <Header />
            <div className="form-body">
                <form
                 onSubmit={submitBusket} 
                 className="artist-form">
                    <div className="artist-form-box">
                    </div>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Write your email"/>
                    <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Write your phone"/>
                    <textarea onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Write your properties"></textarea>
                    <button>
                    {loading ? 'sending...' : 'make order'}
                    </button>
                </form>
                <Link to="/" className="form-fon"></Link>
            </div>
        </>
    )
}

export default BusketForm;