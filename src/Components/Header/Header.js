import React, { useEffect, useState } from 'react'
import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CgFacebook } from "react-icons/cg";
import Logo from '../../Assets/Images/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'

const Header = () => {

  const[activeClass,setActiveClass]=useState(false)

  useEffect(() => {
    const first = document.getElementById("mobile-header");

    const onScroll = (event) => {
      if (window.pageYOffset > 80) {
        first.classList.add("new-mobile-header");
      } else {
        first.classList.remove("new-mobile-header");
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div className='MainNavbar' id="mobile-header">
      <Navbar expand="lg">
        <Container className='con'>
          <Navbar.Brand href="#home"><img src={Logo} alt="Logo" /></Navbar.Brand>
          <div className='menu_main'>
            <Navbar.Toggle className='toggle_button' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='navHome mobile_menu'>
              <Nav className="m-auto mobile_nav">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#services">SERVICES</Nav.Link>
                <Nav.Link href="#pricing">PRICING</Nav.Link>
                <Nav.Link href="#testimonial">TESTIMONIAL</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <ul className="social">
              <li><span className='follow_us'>follow us</span></li>
              <li><a href="#"><CgFacebook /></a></li>
              <li><a href="#"><AiOutlineTwitter /></a></li>
              <li><a href="#"><AiOutlineInstagram /></a></li>
              <li><a href="#"><AiFillLinkedin /></a></li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header