import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Calltoaction from '../../Components/CallToAction/Calltoaction'
import Getintouch from '../../Components/Contact/Contact'
import Crafted from '../../Components/Crafted/Crafted'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Logo from '../../Components/Logo/Logo'
import Pricing from '../../Components/Pricing/Pricing'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner />
      <Crafted/>
      <Pricing/>
      <Calltoaction/>
      <Testimonials/>
      <Logo/>
      <Getintouch/>
      <Footer/>
    </>
  )
}

export default Home