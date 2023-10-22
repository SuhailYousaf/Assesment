import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h3>Knila</h3>
                        <p>
                            We bring world-class expertise to design, develop,
                            and deploy smart solutions that drive innovation and
                            growth.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h3>Contact Us</h3>
                        <p>
                            <strong>Email:</strong> ysuhail444@gmail.com
                            <br />
                            <strong>Phone:</strong> (+91) 9544 486 876
                            <br />
                            <strong>Address:</strong> Coimbatore
                        </p>
                    </Col>
                    <Col md={4}>
                        <h3>Follow Us</h3>
                        <p>
                            <a href="#" className="social-link">
                                Facebook
                            </a>
                            <br />
                            <a href="#" className="social-link">
                                Twitter
                            </a>
                            <br />
                            <a href="#" className="social-link">
                                LinkedIn
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-2">
                &copy; {new Date().getFullYear()} Knila. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
