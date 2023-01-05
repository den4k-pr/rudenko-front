import React, { useEffect } from 'react';
import '../styles/footer.css';
import { useDispatch, useSelector } from "react-redux";
import { getPainters } from '../store/painters/paintersSlice';
import { Link } from 'react-router-dom';

function Footer() {

    const dispatch = useDispatch();
    const { painters } = useSelector((state) => state.painters);

  useEffect(() => {
    dispatch(getPainters())
  }, [dispatch]);
    return(
        <footer className="footer">
            <div className="container">
                <h3 className="footer_title">Featured Artists</h3>
                <div className="footer-painters">
                    {
                        painters && painters.map(painter => (
                            <Link to="/artists" className="footer-painter">
                                <img className="footer-painter-img" src={painter.image} alt="" />
                                <div className="footer-painter-info">
                                    <h3 className="footer-painter-info_name">{painter.name}</h3>
                                    <p className="footer-painter-info-profesional">Painter, {painter.city}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;
