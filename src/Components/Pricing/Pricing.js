import React from 'react'
import baloon_img from '../../Assets/Images/baloon.svg'
import flower_img from '../../Assets/Images/flower.svg'
import craft1 from '../../Assets/Images/craft1.png'
import craft2 from '../../Assets/Images/craft2.png'
import craft3 from '../../Assets/Images/craft3.png'
import { AiOutlineCheckCircle } from "react-icons/ai";
import '../Pricing/Pricing.scss'

const Pricing = () => {
    return (
        <section id="pricing" class="pricing-area">
            <div className='pricing_main'>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-10">
                                <h4 class="title">Our Pricing</h4>
                                <p class="text">Stop wasting time and money designing and managing a website that doesn’t get
                                    results. Happiness guaranteed!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-pricing mt-40">
                                <div class="pricing-header text-center">
                                    <h5 class="sub-title">Basic</h5>
                                    <span class="price">$ 199</span>
                                    <p class="year">per year</p>
                                </div>
                                <div class="pricing-list">
                                    <ul>
                                        <li><AiOutlineCheckCircle className='check_icon' />Carefully crafted components</li>
                                        <li><AiOutlineCheckCircle className='check_icon' />Amazing page examples</li>
                                        <li><AiOutlineCheckCircle className='check_icon' />Super friendly support team</li>
                                        <li><AiOutlineCheckCircle className='check_icon' />Awesome Support</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn text-center">
                                    <a class="main-btn" href="#">GET STARTED</a>
                                </div>
                                <div class="buttom-shape">
                                    <img src={craft1} alt="" className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-pricing pro mt-40">
                                <div class="pricing-baloon">
                                    <img src={baloon_img} alt="baloon" />
                                </div>
                                <div class="pricing-header">
                                    <h5 class="sub-title">Pro</h5>
                                    <span class="price">$ 399</span>
                                    <p class="year">per year</p>
                                </div>
                                <div class="pricing-list">
                                    <ul>
                                        <li><AiOutlineCheckCircle className='check_icon' /> Carefully crafted components</li>
                                        <li><AiOutlineCheckCircle className='check_icon' /> Amazing page examples</li>
                                        <li><AiOutlineCheckCircle className='check_icon' /> Super friendly support team</li>
                                        <li><AiOutlineCheckCircle className='check_icon' /> Awesome Support</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn text-center">
                                    <a class="main-btn" href="#">GET STARTED</a>
                                </div>
                                <div class="buttom-shape">
                                    <img src={craft2} alt="" className='w-100' />

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-pricing enterprise mt-40">
                                <div class="pricing-flower">
                                    <img src={flower_img} alt="flower" />
                                </div>
                                <div class="pricing-header">
                                    <h5 class="sub-title text-end">Enterprise</h5>
                                    <span class="price text-end">$ 799</span>
                                    <p class="year text-end">per year</p>
                                </div>
                                <div class="pricing-list">
                                    <ul className='list'>
                                        <li><AiOutlineCheckCircle className='check_icon' />Carefully crafted components</li>
                                        <li><AiOutlineCheckCircle className='check_icon' />Amazing page examples</li>
                                        <li><AiOutlineCheckCircle className='check_icon' />Super friendly support team</li>
                                        <li><AiOutlineCheckCircle className='check_icon' />Awesome Support</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn text-center">
                                    <a class="main-btn" href="#">GET STARTED</a>
                                </div>
                                <div class="buttom-shape">
                                    <img src={craft3} alt="" className='w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing