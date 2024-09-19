import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-4">Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
          <Button as={Link} to="/" variant="primary">
            Return to Home Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;