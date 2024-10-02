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
  justify-content: center;
  align-items: center;
  background-color: #000000; 
`;

const RegisterForm = styled.form`
  background-color: #EAC8AF; /* OAK light color */
  padding: 40px;
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
    background: #eeeeee; /* Change on hover */
  }
`;

const LogInFormSignup = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  p {
    font-size: 14px;
    color: #ffffff;

    .highlighted {
      color: #000000;
      cursor: pointer;
      transition: color 0.3s;
      text-decoration: none;

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


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', { // Changed endpoint to register
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();
    console.log(data); // Handle response
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Create an Account</Title>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
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
        <Button type="submit">Sign Up</Button>
        <LogInFormSignup>
          <p>
            Already have an account?{" "}
            <a href="./Login" className="highlighted">Log In</a> {/* Changed to point to login page */}
          </p>
        </LogInFormSignup>
        <HomeLink to={"/"}><FontAwesomeIcon icon={faHome} /></HomeLink>
      </RegisterForm>
    </Container>
  );
};

export default Register;
