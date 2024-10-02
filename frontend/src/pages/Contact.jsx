import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
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
    color: #555;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
  }

  label {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
  }

  input,
  textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 15px;
    background-color: #d8ac9c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b78a7b;
    }
  }
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log({ name, email, message });
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id='contact'>
    <ContactContainer>
      <h1>Get in Touch</h1>
      <p>
        We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          rows="4" 
          required 
        />

        <button type="submit">Send Message</button>
      </form>
    </ContactContainer>
    </div>
  );
};

export default Contact;
