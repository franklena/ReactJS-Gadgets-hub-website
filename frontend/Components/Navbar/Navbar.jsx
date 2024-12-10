import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { FaShoppingCart, FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState("Navbar");
    const [darkMode, setDarkMode] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to toggle dark mode
    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    // Function to highlight search query across the website
    const highlightText = (query) => {
        if (!query) return;

        // Replace content with highlighted term
        const bodyText = document.body.innerHTML;
        const highlightedText = bodyText.replace(new RegExp(query, 'gi'), (match) => `<mark>${match}</mark>`);
        document.body.innerHTML = highlightedText;
    };

    // Handle search without refreshing
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent page refresh
        highlightText(searchQuery);
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
                <p>Gadgets-hub</p>
            </div>

            <ul className='nav-menu'>
                <li>
                    <ScrollLink to="carousel-section" smooth={true} duration={500} onClick={() => setMenu("home")}>
                        HOME {menu === "home" && <hr />}
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="category-section" smooth={true} duration={500} onClick={() => setMenu("shop")}>
                        SHOP {menu === "shop" && <hr />}
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="banner-section" smooth={true} duration={500} onClick={() => setMenu("about")}>
                        ABOUT {menu === "about" && <hr />}
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="blog-section" smooth={true} duration={500} onClick={() => setMenu("blogs")}>
                        BLOGS {menu === "blogs" && <hr />}
                    </ScrollLink>
                </li>
            </ul>

            <div className="nav-login">
                <FaSearch className="search-icon" onClick={() => setSearchActive(!searchActive)} />

                {searchActive && (
                    <form className="search-box" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">Go</button>
                    </form>
                )}

                <FaShoppingCart className="shopping-cart" />
                {darkMode ? (
                    <FaSun className="mode-toggle" onClick={toggleMode} />
                ) : (
                    <FaMoon className="mode-toggle" onClick={toggleMode} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
