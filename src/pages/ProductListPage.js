import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../slices/productsSlice';
import { addToCart } from '../slices/cartSlice';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
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

  const filteredProducts = products.filter(product => 
    product.category.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === categoryId.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return <div>No products found in this category.</div>;
  }

  return (
    <div>
      <h1 className="mb-4">Products in {categoryId}</h1>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title className="card-title">{product.title}</Card.Title>
                <Card.Text>₹{product.price.toFixed(2)}</Card.Text>
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

export default ProductListPage;