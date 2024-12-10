import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './CarouselPage';
import Category from './Components/Category/Category';
import Banner from './Components/Banner/Banner';
import Product from './Components/Product/Product';
import Sales from './Components/Sales/Sales';
import Blog from './Components/Blogs/Blog';
import Footer from './Components/Footer/Footer';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode); // Toggle dark mode state
    };

    const handleLoginSuccess = () => {
        setIsAuthenticated(true); // Set authenticated state to true
    };

    const handleLoginFailure = () => {
        setIsAuthenticated(false); // Set authenticated state to false
    };

    return (
        <Router>
            <Routes>
                <Route 
                    path="/login" 
                    element={
                        isAuthenticated 
                            ? <Navigate to="/navbar" /> 
                            : <Login onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
                    } 
                />
                <Route path="/register" element={<Register />} />
                <Route 
                    path="/navbar" 
                    element={
                        isAuthenticated ? (
                            <div>
                                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                                <div id="carousel-section">
                                    <CarouselPage />
                                </div>
                                <div id="sales-section">
                                    <Sales />
                                </div>
                                <div id="category-section">
                                    <Category />
                                </div>
                                <div id="product-section">
                                    <Product />
                                </div>
                                <div id="banner-section">
                                    <Banner />
                                </div>
                                <div id="blog-section">
                                    <Blog />
                                </div>
                                <div id="footer-section">
                                    <Footer />
                                </div>
                            </div>
                        ) : (
                            <Navigate to="/login" />
                        )}
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
