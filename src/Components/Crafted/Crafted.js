import React from 'react'
import { AiFillFastBackward, } from "react-icons/ai";
import { GiElectric, } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiBrush } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import services_img from '../../Assets/Images/services.png'
import '../Crafted/Crafted.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const Crafted = () => {
    return (
        <div className='crafted_main' id='services'>
            <section id="service" class="services-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-10">
                                <h4 className="title">Crafted For</h4>
                                <p className="text">Stop wasting time and money designing and managing a website that doesn’t get
                                    results. Happiness guaranteed!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 services_part">
                            <div className="row">
                                <div className="col-md-6 p-0 pb-4">
                                    <div className="services-content mt-40 d-sm-flex">
                                        <div className="services-icon">
                                            <GiElectric className='svg_icon' />
                                        </div>
                                        <div className="services-content media-body">
                                            <h4 className="services-title">Startup</h4>
                                            <p className="text">Short description for the ones<br /> who look for something new.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0 pb-4">
                                    <div className="services-content mt-40 d-sm-flex">
                                        <div className="services-icon">
                                            <AiOutlineBarChart className='svg_icon' />
                                        </div>
                                        <div className="services-content media-body">
                                            <h4 className="services-title">SaaS Business</h4>
                                            <p className="text">Short description for the ones<br /> who look for something new.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="services-content mt-40 d-sm-flex">
                                        <div className="services-icon">
                                            <BiBrush className='svg_icon' />

                                        </div>
                                        <div className="services-content media-body">
                                            <h4 className="services-title">Agency</h4>
                                            <p className="text">Short description for the ones<br /> who look for something new.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="services-content mt-40 d-sm-flex">
                                        <div className="services-icon">
                                            <HiOutlineLightBulb className='svg_icon' />

                                        </div>
                                        <div className="services-content media-body">
                                            <h4 className="services-title">App Landing</h4>
                                            <p className="text">Short description for the ones<br /> who look for something new.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-image d-lg-flex align-items-center">
                <div className="image">
                    <img src={services_img} alt="Services"/>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Crafted