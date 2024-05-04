import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/IT ZONE LOGO.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Margin } from '@mui/icons-material';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [showScrollContent, setShowScrollContent] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const closingTimer = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollContent(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSetActive = (link) => {
        setActiveLink(activeLink);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openProductsDropdown = () => {
        clearTimeout(closingTimer.current);
        setProductsDropdownOpen(true);
        setServicesDropdownOpen(false); // Close services dropdown if open
    };

    const closeProductsDropdown = () => {
        closingTimer.current = setTimeout(() => {
            setProductsDropdownOpen(false);
        }, 300); // Delay the closing by 300 ms
    };

    const openServicesDropdown = () => {
        clearTimeout(closingTimer.current);
        setServicesDropdownOpen(true);
        setProductsDropdownOpen(false); // Close products dropdown if open
    };

    const closeServicesDropdown = () => {
        closingTimer.current = setTimeout(() => {
            setServicesDropdownOpen(false);
        }, 300); // Delay the closing by 300 ms
    };

    const navigateToSection = (hash) => {
        // Navigate function might not need to change the route but just handle the scrolling
        const path = `/products#${hash}`;
        navigate(path);
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0); // Adjust timing if needed, but it might work immediately if the elements are already mounted
    };

    const navigateToServicesSection = (hash) => {
        // Navigate function might not need to change the route but just handle the scrolling
        const path = `/services#${hash}`;
        navigate(path);
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0); // Adjust timing if needed, but it might work immediately if the elements are already mounted
    };

    return (
        <>
            <div className={`scroll-content ${showScrollContent ? 'show' : ''}`}>
            <div className='headericons'>
                <div className='d-flex nav'>
                    <div className='d-flex para'>
                        <a href="tel:8861796976" style={{ textDecoration: "none", color: "black" }}>
                            &nbsp; &nbsp; &nbsp; &nbsp;  <i className="fas fa-phone"></i> 8861796976
                        </a> &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href="mailto:info@it-zone.in" style={{ textDecoration: "none", color: "black" }}>
                            <i className="fas fa-envelope"></i> info@it-zone.in
                        </a>
                    </div>
                    {/* <p className='mb-3'>Follow us:
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='p-2'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='p-2'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='p-2 icon'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </p> */}
                </div>
                </div>
                <hr />
            </div>
            <nav className={ `navbar ${showScrollContent ? 'fixed-top' : ''}`} style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
    <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? (
                <div className="close-icon">
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            ) : (
                <>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </>
            )}
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
                            <a 
                            href="/" 
                            className={`nav-item ${activeLink === "/" ? "active" : ""}`} 
                            onClick={() => handleSetActive("home")}
                            >
                            Home
                            </a>
            </li>
            <li onMouseEnter={openProductsDropdown} onMouseLeave={closeProductsDropdown}>
                            <a 
                            href="/products" 
                            className={`nav-item ${activeLink === "/products" ? "active" : ""}`} 
                            onClick={() => handleSetActive("products")}
                            >
                            Product
                            </a>
                {isProductsDropdownOpen && (
                    <div className="dropdown headericons" style={{ position: 'absolute', top: '60px' }}>
                        <div className="dropdown-column">
                            <button onClick={() => navigateToSection('laptops')} className='id1 '>Laptop & Computer Brand</button>
                            <button onClick={() => navigateToSection('hardware')} className='id2 '>Hardware & Networking Solutions</button>
                            <button onClick={() => navigateToSection('software')} className='id3 '>Software Installation Support</button>
                            <button onClick={() => navigateToSection('server-management')} className='id4'>Server Rack and Cable Management</button>
                        </div>
                        <div className="dropdown-column headericons" >
                            <button onClick={() => navigateToSection('cctv-services')} className='id5' >CCTV Services</button>
                            <button onClick={() => navigateToSection('wifi-solutions')} className='id6 '>Enterprise Wi-Fi Solutions</button>
                            <button onClick={() => navigateToSection('enterprise-solutions')} className='id7 ' >Enterprise Solutions</button>
                        </div>
                    </div>
                )}
            </li>
            <li onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
                            <a 
                            href="/services" 
                            className={`nav-item ${activeLink === "/services" ? "active" : ""}`} 
                            onClick={() => handleSetActive("services")}
                            >
                            Services
                            </a>
                {isServicesDropdownOpen && (
                    <div className="service-dropdown" style={{ position: 'absolute', top: '60px' }}>
                        <div className="service-dropdown-column">
                            <button onClick={() => navigateToServicesSection('laptop-repair')} className='service-id1'>Laptop & Repair Services</button>
                            <button onClick={() => navigateToServicesSection('data-backup&recovery')} className='service-id2'>Data Backup & Recovery</button>
                        </div>
                        <div className="dropdown-column" >
                            <button onClick={() => navigateToServicesSection('software-licensing-service')} className='service-id3'>Software Licensing Service </button>
                            <button onClick={() => navigateToServicesSection('cctv-installation')} className='service-id4'>CCTV Camera Installation</button>
                        </div>
                    </div>
                )}
            </li>
            <li>
                            <a 
                            href="/about" 
                            className={`nav-item ${activeLink === "/about" ? "active" : ""}`} 
                            onClick={() => handleSetActive("about")}
                            >
                            About
                            </a>
            </li>
            <li>
                            <a 
                            href="/contact" 
                            className={`nav-item ${activeLink === "/contact" ? "active" : ""}`} 
                            onClick={() => handleSetActive("contact")}
                            >
                            Contact
                            </a>
            </li>
        </ul>
    </div>
</nav>

        </>
    );
};

export default Navbar;
