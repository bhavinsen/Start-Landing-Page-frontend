import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Logo from '../../Assets/Images/logo.svg'
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <div className='MainFooter'>
            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                                <div className="footer-logo d-flex align-items-end">
                                    <a className="mt-30" href="index.html"><img src={Logo} alt="Logo" /></a>
                                    <ul className="social mt-30">
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><AiOutlineTwitter /></a></li>
                                        <li><a href="#"><AiOutlineInstagram /></a></li>
                                        <li><a href="#"><AiFillLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-link">
                                <h6 className="footer-title">Company</h6>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Career</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-link">
                                <h6 className="footer-title">Product & Services</h6>
                                <ul>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Developer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-5">
                            <div className="footer-link">
                                <h6 className="footer-title">Help & Suuport</h6>
                                <ul>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer-newsletter">
                                <h6 className="footer-title">Subscribe Newsletter</h6>
                                <div className="newsletter">
                                    <form action="#">
                                        <input type="text" placeholder="Your Email" />
                                        <button type="submit"><MdOutlineArrowForwardIos /><MdOutlineArrowForwardIos /></button>
                                    </form>
                                </div>
                                <p className="text">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copyright text-center">
                                <p class="text">Template Crafted by <a rel="nofollow" href="../../index.htm">UIdeck</a> - UI
                                    Powered by <a el="nofollow" href="../../index-1.htm">AyroUI</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer