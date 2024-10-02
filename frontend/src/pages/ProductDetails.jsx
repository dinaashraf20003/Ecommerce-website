import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; // Import styled-components

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h2`
  text-align: center;
`;

const ProductDetailsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

const ProductTitle = styled.h3`
  font-size: 24px;
`;

const ProductInfo = styled.p`
  font-size: 18px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 18px;
`;

function ProductDetails() {
  const { id, title } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`) // Fetching a specific product
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((prod) => {
        setProduct(prod); // Set the product data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false on error
      });
  }, [id]); // Dependency array should include id

  return (
    <Container>
      <Title>Products</Title>
      <SubTitle>{id} {title ? "- " + title : " "}</SubTitle>
      {loading ? ( // Show loading state
        <LoadingMessage>Loading...</LoadingMessage>
      ) : error ? ( // Show error message if fetch fails
        <ErrorMessage>Error: {error}</ErrorMessage>
      ) : product ? ( // Show product details if available
        <ProductDetailsContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductInfo>ID: {product.id}</ProductInfo>
          <ProductInfo>Price: {product.price}$</ProductInfo>
          <ProductImage src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'} alt={product.title} />
        </ProductDetailsContainer>
      ) : (
        <ErrorMessage>Product not found.</ErrorMessage> // Fallback if no product data
      )}
    </Container>
  );
}

export default ProductDetails;
