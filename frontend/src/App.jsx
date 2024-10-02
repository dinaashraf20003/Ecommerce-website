import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const App = () => {
    return (
        <Router>
            <div>
                <Routes> {/* Wrap all routes in the Routes component */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id/:title" element={<ProductDetails />} /> {/* Route for product details */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
