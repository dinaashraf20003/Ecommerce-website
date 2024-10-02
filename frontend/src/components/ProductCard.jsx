import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Product = styled.div`
  width: calc(25% - 20px); // 4 cards per row with margin adjustment
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #fff;
  display: flex;
  flex-direction: column; // Allows vertical stacking of content

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%; // Ensures the image covers the card width
    height: 300px; // Fixed height for uniformity
    object-fit: cover; // Maintains aspect ratio and covers the area
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
    color: #777;
  }

  .price {
    font-weight: bold;
    color: #e67e22; /* A vibrant color for price */
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); // 2 cards per row for medium screens
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px); // 1 card per row for small screens
  }
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <Product onClick={() => navigate(`/products/${product.id}/${product.title}`)}>
      <img
        src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p>ID: {product.id}</p>
      <p className="price">Price: {product.price}$</p>
    </Product>
  );
};

export default ProductCard;
