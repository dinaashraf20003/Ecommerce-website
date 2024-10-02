import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard"; // Import the reusable ProductCard component

const Container = styled.div`
  padding: 70px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .products-wrapper {
    display: flex;
    flex-wrap: wrap; // Allows wrapping to the next line
    justify-content: space-between; // Space between cards
  }
`;

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products)) // Assuming the products are inside a 'products' key
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id='products'>
    <Container>
      <h1>Products</h1>
      <div className="products-wrapper">
        {data.map((prod) => (
          <ProductCard key={prod.id} product={prod} /> // Passing product data to the card
        ))}
      </div>
    </Container>
    </div>
  );
}

export default Products;
