import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import adventure from "../../Assets/Images/client_logo_01.png";
import microsoft from "../../Assets/Images/client_logo_02.png";
import google from "../../Assets/Images/client_logo_03.png";
import o1net from "../../Assets/Images/client_logo_04.png";
import "./Logo.scss";

const Logo = () => {
   return (
      <div className="client">
         <Container>
            <Row className="align-items-center justify-content-center">
               <Col xs={6} md={3}>
                  <div className="adventure">
                     <img src={adventure} alt="adventure" />
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div className="adventure">
                     <img src={microsoft} alt="microsoft" />
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div className="adventure mt-4 mt-md-0">
                     <img src={google} alt="google" />
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div className="adventure mt-4 mt-md-0">
                     <img src={o1net} alt="o1net" />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Logo;
