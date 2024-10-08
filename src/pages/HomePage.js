import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../slices/productsSlice';
import { addToCart } from '../slices/cartSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="mb-4">Our Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>₹{product.price}</Card.Text>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                <Button variant="success" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;