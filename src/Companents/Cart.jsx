import React from 'react';
import useSmthStore from './Navbar/my-store';

const Cart = () => {
  const { cart, removeFromCart } = useSmthStore();

  return (
    <div className="cart">
      <h2>Саватча</h2>
      {cart.length === 0 ? (
        <p>Саватча бўш</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price} сўм</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>❌ Олиб ташлаш</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
