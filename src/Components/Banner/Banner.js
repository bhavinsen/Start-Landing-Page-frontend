import React from 'react'
import { Link } from 'react-router-dom'
import header_shape from '../../Assets/Images/header-shape.svg'
import { FiPlay } from "react-icons/fi";
import ScrollToTop from "react-scroll-to-top";
import { BsChevronUp } from "react-icons/bs";
import './Banner.scss'

const Banner = () => {
    return (
        <div className="main-banner">
            <ScrollToTop smooth component={<BsChevronUp/>} className="back-to-top" />
            <div id="home" className="header-hero bg_cover">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="header-content text-center">
                                <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
                                <p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to
                                    make your project closer to launch!</p>
                                <ul className="header-btn rounded-buttons">
                                    <li><Link to="/" className="main-btn rounded-three" href="#">GET IN TOUCH</Link></li>
                                    <li><Link to="/" className="main-btn rounded-four video-popup">WATCH THE VIDEO<FiPlay className='lni-play'/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-shape">
                    <img src={header_shape} alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default Banner