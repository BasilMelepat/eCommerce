import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { addToCart } from '../slices/cartSlice';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(productId))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.title} fluid />
      </Col>
      <Col md={6}>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetailPage;