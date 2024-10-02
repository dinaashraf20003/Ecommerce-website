import React from 'react';
import styled from 'styled-components';
import PIC from "../assets/pic.png";

const ImageContainer = styled.div`
  position: relative; 
  display: inline-block; 
  width: 100%; 
  height: 100vh; 
  max-height: 660px; 
  overflow: hidden; 
  background-image: url(${PIC}); 
  background-size: cover; 
  background-position: center; 

  @media (max-width: 768px) {
    height: 50vh; 
  }

  @media (max-width: 480px) {
    height: 40vh; 
  }
`;

const ImageButton = styled.button`
  position: absolute;
  bottom: 20%; 
  left: 26.5%; 
  transform: translateX(-50%); 
  padding: 18px 65px; 
  background-color: #d8ac9c; 
  color: black; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; 
  font-weight: 700;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #b78a7b; 
  }

  @media (max-width: 768px) {
    padding: 12px 40px; 
    font-size: 14px; 
  }

  @media (max-width: 480px) {
    padding: 10px 30px; 
    font-size: 12px; 
  }
`;

const LandingPage = () => {
  return (
    <ImageContainer>
      <ImageButton>Shop Now</ImageButton>
    </ImageContainer>
  );
}

export default LandingPage;
