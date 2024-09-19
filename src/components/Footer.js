import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light mt-5 py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/category/electronics">Electronics</Link></li>
              <li><Link to="/category/clothing">Clothing</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a leading e-commerce platform offering a wide range of products at competitive prices.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 E-commerce Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;