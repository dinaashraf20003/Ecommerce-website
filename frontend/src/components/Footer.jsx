import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  color: #333;
  border-top: 1px solid #ddd;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;

  a {
    color: #D8AC9C;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} OAK. All Rights Reserved. 
        <br />
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
