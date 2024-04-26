import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus,faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

const Header = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <div className='container-fluid w-75'>
            <nav className="navbar container-nav navbar-expand-lg navbar-light fixed-top">                 
                <div className='heading-container'>
                    <Link to='/' className='heading-container'>
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png"
                        className="Borgani-logo"
                        alt='image9'
                        />
                       <h1 className='borgnanics-heading'>B Organics</h1>                 
                    </Link>                            
                </div>

                <div className='topleft-nav-container'>
                    <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item dropdown Shop-Categories">
                                <button className="btn dropdown-toggle Shop-Categories" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop Categories
                                </button>
                                <ul className="dropdown-menu dropdown-menu-light">
                                    <Link to="/HoneyProducts" className="dropdown-item">Honey Products</Link>
                                    <Link to="/CoffeeProducts" className="dropdown-item">Coffee Products</Link>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/contactus' className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/aboutus' className="nav-link">About Us</Link>
                            </li>
                            {/* Add your other navigation items here */}
                        </ul>
                    </div>
                </div>                    
                    <div className='userlogin-navbar'>
                        <div className='usericon'>
                        {/* <Link to="/login" className='linkforlogin'>
                            <div className='loginusericon'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <p className='login-text'>Login</p> 
                        </Link> */}
                            
                        </div>                                                  
                            <Link to="/Addcart" className='linkforAddcart'><FontAwesomeIcon className="cart-icon" icon={faCartPlus} /></Link>
                    </div>                 
            </nav>
            </div>
        </>
    );
};

export default Header;
