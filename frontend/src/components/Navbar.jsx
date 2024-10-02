import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #FFFFFF;
  position:fixed;
  box-shadow: 0px 5.333px 80px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  img {
    width: 5%; 
    height: auto; 
  }
`;

const NavBarContent = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 42.667px;
  padding: 0;
  margin: 0;

  li {
    text-decoration: none;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
    position: relative;
    padding-bottom: 5px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.3s ease, width 0.3s ease; 
      width: 0;
    }

    &:hover::after {
      background-color: #D8AC9C; 
      width: 100%; 
    }

    &:hover {
      color: #D8AC9C; 
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img src={Logo} alt="Logo" />
      <NavBarContent>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </NavBarContent>
      <NavBarContent>
        <li><FontAwesomeIcon icon={faUser} /> </li>
        <li><FontAwesomeIcon icon={faShoppingCart} /></li>      
      </NavBarContent>
    </Nav>
  );
};

export default Navbar;
