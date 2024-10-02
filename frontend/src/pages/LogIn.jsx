import React, { useState } from 'react';
import styled from 'styled-components';
import BCK from "../assets/bck.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
padding-top:100px;
 position: relative; 
  display: inline-block; 
  width: 100%; 
  height: 100vh; 
  max-height: 660px; 
  overflow: hidden; 
  background-image: url(${BCK}); 
  background-size: cover; 
  background-position: center; 
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000000; 
`;

const LogInForm = styled.form`
  background-color: #EAC8AF; /* OAK light color */
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: #FFFFFF; /* OAK accent color */
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  color: #ffffff;
  transition: border-color 0.3s;

  &:hover {
    border-color: #000000; /* Change on hover */
  }

  &:focus {
    border-color: #000000; /* Change on focus */
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background: #FFFFFF;
  color: #000000;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #eeeeee; /* Reverse gradient on hover */
  }
`;
const LogInFormSignup = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:20px;

  p {
    font-size: 14px;
    color: #ffffff;

    .highlighted {
      color: #000000;
      cursor: pointer;
      transition: color 0.3s;
      text-decoration:none;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;
const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Adjust as needed for spacing */
  text-decoration: none; /* Remove underline */
  color:white;
`;


const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data); // Handle response
  };

  return (
    <Container>
      <LogInForm onSubmit={handleSubmit}>
        <Title>Welcome Back</Title>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Log In</Button>
        <LogInFormSignup>
            <p>
              Don't have an account?{" "}
              <a href="./Register" className="highlighted">Sign Up</a>
            </p>
          </LogInFormSignup>
          <HomeLink to={"/"}><FontAwesomeIcon icon={faHome} /></HomeLink>
      </LogInForm>
    </Container>
  );
};

export default LogIn;
