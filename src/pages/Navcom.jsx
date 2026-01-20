import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navcom.css";

const Navcom = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      // Navigate to home page with search query
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="brand">
          <a href="/">Asma's Blog</a>
        </div>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "rotate1" : ""}`}></div>
          <div className={`line ${menuOpen ? "fade" : ""}`}></div>
          <div className={`line ${menuOpen ? "rotate2" : ""}`}></div>
        </div>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/categories">Categories</a>
          <div className="dropdown">
            <button className="dropbtn">More ▼</button>
            <div className="dropdown-content">
              <a href="/contact">Contact</a>
              <a href="/resources">Resources</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>

          {/* Search icon */}
          <div className="search-container">
            {searchOpen && (
              <input
                type="text"
                placeholder="Search blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
                autoFocus
                className="search-input-active"
              />
            )}
            <button
              className="search-icon-btn"
              onClick={searchOpen ? handleSearchClick : toggleSearch}
              title="Search"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navcom;

