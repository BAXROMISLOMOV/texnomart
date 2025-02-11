import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSmthStore from './Navbar/my-store';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart, toggleLike, likedItems } = useSmthStore();

  if (!state?.product) {
    return <p>Маълумот топилмади</p>;
  }

  const { product } = state;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)}>⬅️ Ортга қайтиш</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Нархи: {product.price} сўм</p>

      <button onClick={() => addToCart(product)}>Саватчага қўшиш</button>
      <button onClick={() => toggleLike(product.id)}>
        {likedItems[product.id] ? '💖' : '🤍'} Севимлиларга
      </button>
    </div>
  );
};

export default ProductDetail;
