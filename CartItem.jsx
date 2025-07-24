import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from '../../eplantShopping/CartSlice'; 
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className='cart-item'>
      <h4>{item.name}</h4>
      <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
      <div className='quantity-controls'>
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
