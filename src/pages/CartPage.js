import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="primary" size="sm" className="add" onClick={() => dispatch(addToCart(item))}>+</Button>
                    <Button variant="danger" size="sm" className="minus" onClick={() => dispatch(removeFromCart(item.id))}>-</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;