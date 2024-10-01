import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';

const App = () => {
    return (
        <div>
            <Navbar />
            <ProductList />
        </div>
    );
};

export default App;
