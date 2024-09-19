import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.auth.user);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-commerce Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/electronics">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/category/clothing">Clothing</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Navbar.Text>Welcome, {user.name}</Navbar.Text>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="secondary">{cartQuantity}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;