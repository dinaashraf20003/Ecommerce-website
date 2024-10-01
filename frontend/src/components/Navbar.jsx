import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: white;
`;

const Navbar = () => {
    return (
        <Nav>
            <h1>E-Commerce</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </Nav>
    );
};

export default Navbar;
