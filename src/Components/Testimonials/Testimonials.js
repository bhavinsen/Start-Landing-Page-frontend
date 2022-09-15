import React,{useEffect,useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.scss'
import Slider from 'react-slick';

const Testimonials = () => {
    const[testimonials,setTestimonials]=useState([])
    const baseURL = "http://localhost:5000";
    const fetchTestimonialsData = async()=>{
        const response = await fetch(`${baseURL}/api/getTestimonial`,{ 
            method:"get",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Origin": "*"
            },
        }).then(data =>data.json()).then(function(data){
            return data
        })

        return response     
    }
    useEffect(()=>{
        fetchTestimonialsData().then((data)=>{
            if(data !== undefined){
                setTestimonials(data);
            }else{
                setTestimonials([])
            }
        })
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
              }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1
                }
            }
          ]
    };
    return (
        <>
            <div className="main-testimonials" id='testimonial'>
                <section id="testimonial" className="testimonial-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center pb-10">
                                    <h4 className="title">Testimonial</h4>
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn't get
                                        results. Happiness guaranteed!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="testimonial-active">
                                    <div>
                                        {console.log("tets me---->",testimonials)}
                                        <Slider {...settings}>
                                            {console.log("testimonials-->",testimonials)}
                                            { testimonials && testimonials.map((data, key) => {
                                                return (
                                                    < div className="single-testimonial mt-30 mb-30 text-center" key={key}>
                                                        <div className="testimonial-image">
                                                            <img src={`${baseURL}/${data.image}`} alt="Author" />
                                                        </div>
                                                        <div className="testimonial-content">
                                                            <div>
                                                            <p className="text">{data.testimonialDescription}</p>
                                                            </div>
                                                            <h6 className="author-name">{data.name}</h6>
                                                            <span className="sub-title">{data.title}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Testimonials