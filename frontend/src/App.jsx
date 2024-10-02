import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

const App = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <About/>
            <Contact/>
            <LogIn/>
            <Register/>
        </div>
    );
};

export default App;
