import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// Storing nav links in an array makes them much easier to manage.
const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Organising Committee",
    path: "/Committee",
    dropdown: [
      { name: "Organizer", path: "/Committee/organizer" },
      { name: "Advisory Committee", path: "/Committee/advisory" },
      { name: "Sub Advisory Committee", path: "/Committee/sub-advisory" },
      { name: "Sub Committee Members", path: "/Committee/sub-committee" },
    ],
  },
  { name: "Important Dates", path: "/Important_dates" },
  { name: "Paper Submission", path: "/Paper_submission" },
  { name: "Conference Schedule", path: "/schedule" },
  { name: "Accommodation", path: "/Accomodation" },
  /*{ name: "Publications", path: "/Publications" },*/
  { name: "Gallery", path: "/Gallery" },
  { name: "Contact Us", path: "/ContactUs" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle sticky navbar on scroll
  useEffect(() => {
    // Stick after scrolling past the top bar's height
    const handleScroll = () => setIsSticky(window.scrollY > 100); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };
  
  const handleDropdownClick = (e, index) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  return (
    <>
      <header className="header">
        {/* Top bar for the logo */}
        <div className="header__top-bar">
            <Link to="/" className="header__logo-link" onClick={closeAllMenus}>
                <img className="header__logo" src="./assets/college_logo.png" alt="Logo" />
                
            </Link>
        </div>

        {/* Main blue navigation bar */}
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="navbar__container">
            <div className={`navbar__nav ${isMenuOpen ? "active" : ""}`}>
              <ul className="navbar__links">
                {navLinks.map((link, index) => (
                  <li key={index} className={link.dropdown ? "navbar__dropdown" : ""}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive && !link.dropdown ? "nav-link active-link" : "nav-link")}
                      onClick={(e) => link.dropdown ? handleDropdownClick(e, index) : closeAllMenus()}
                    >
                      {link.name}
                      {link.dropdown && <span className="dropdown-arrow">▼</span>}
                    </NavLink>
                    {link.dropdown && (
                      <ul className={`navbar__dropdown-menu ${openDropdown === index ? 'active' : ''}`}>
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link to={item.path} onClick={closeAllMenus}>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="navbar__menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
        </nav>
      </header>
      {/* Spacer to prevent content jump when navbar becomes sticky */}
      {isSticky && <div className="navbar__spacer"></div>}
    </>
  );
};

export default Navbar;