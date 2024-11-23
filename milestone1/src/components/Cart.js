
import React from 'react';

const Cart = ({ cartItems, updateItemQuantity, removeItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price} x {item.quantity}</p>
            <button onClick={() => updateItemQuantity(index, item.quantity + 1)}>Increase Quantity</button>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
