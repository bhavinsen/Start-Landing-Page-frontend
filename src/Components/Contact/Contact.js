import React from "react";
import {
   Button,
   Col,
   Container,
   FloatingLabel,
   Form,
   Row
} from "react-bootstrap";
import "./Contact.scss";

const Getintouch = () => {
   return (
      <div className="maincontact" id="contact">
         <Container>
            <div className="contact">
               <h1>Get In touch</h1>
               <p>
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
               </p>
            </div>
            <Container>
               <div className="form">
                  <div className="name">
                     <Row className="justify-content-center">
                        <Col md={12} lg={6}>
                           <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                 type="email"
                                 placeholder="Your Name"
                              />
                           </Form.Group>
                        </Col>
                        <Col md={12} lg={6}>
                           <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                 type="email"
                                 placeholder="Your Email"
                                 className="mt-4 mt-lg-0"
                              />
                           </Form.Group>
                        </Col>
                     </Row>
                  </div>
                  <div className="number">
                     <Row className="justify-content-center">
                        <Col md={12} lg={6}>
                           <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                 type="email"
                                 placeholder="Subject"
                              />
                           </Form.Group>
                        </Col>
                        <Col md={12} lg={6}>
                           <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                 type="number"
                                 placeholder="Phone"
                                 className="mt-4 mt-lg-0"
                              />
                           </Form.Group>
                        </Col>
                     </Row>
                  </div>
                  <Form.Control
                     as="textarea"
                     placeholder="Your Message"
                     style={{ height: "100px" }}
                  />
                  <div className="subscribe">
                     <Button variant="primary">SEND MESSAGE</Button>
                  </div>
               </div>
            </Container>
         </Container>
      </div>
   );
};

export default Getintouch;
