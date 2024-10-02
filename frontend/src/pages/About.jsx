import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    max-width: 800px;
    margin: 0 auto 20px;
  }

  .mission {
    font-weight: bold;
    margin-top: 20px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>Welcome to OAK</h1>
      <p>
        At OAK, we believe that every individual deserves products that reflect their unique style and personality. Our curated collection of stationery and apparel is crafted with the utmost care, ensuring quality and comfort in every piece. 
      </p>
      <p>
        We are passionate about creating exceptional designs that resonate with your lifestyle. Each product is a testament to our commitment to luxury and craftsmanship, designed to inspire creativity and self-expression.
      </p>
      <p className="mission">
        Our mission is to empower you to embrace your individuality through our one-of-a-kind creations.
      </p>
      <p>
        Join us on this journey as we celebrate uniqueness, elegance, and the art of living beautifully.
      </p>
    </AboutContainer>
  );
};

export default About;
