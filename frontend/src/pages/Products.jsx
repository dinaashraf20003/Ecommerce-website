import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Ensure you import navigate if using react-router

const Container = styled.div`
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }
`;

const Product = styled.div`
  float: left;
  width: 30%;
  margin: 5px;
  padding: 5px;
  border: 1px solid; /* Corrected to use solid border */
  cursor: pointer;

  img {
    max-width: 100%;
    height: 200px;
  }
`;

function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products)) // Assuming the products are inside a 'products' key
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      <h2>Products</h2>
      {data.map((prod) => (
        <Product key={prod.id} onClick={() => navigate(`/products/${prod.id}/${prod.title}`)}>
          <img src={prod.images && prod.images.length > 0 ? prod.images[0] : 'https://via.placeholder.com/150'} alt={prod.title} />
          <h2>{prod.title}</h2>
          <p>ID: {prod.id}</p>
          <p>Price: {prod.price}$</p>
        </Product>
      ))}
    </Container>
  );
}

export default Products;
