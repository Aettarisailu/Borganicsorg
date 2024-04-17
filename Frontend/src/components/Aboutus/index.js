// AboutUs.jsx
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTruck,faCircleCheck,faRotate,faClipboardList} from '@fortawesome/free-solid-svg-icons';
import {faPagelines, } from '@fortawesome/free-brands-svg-icons';
import {  Link } from "react-router-dom";
import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-section">
                <div className="about-us-content">
                    <h2 className="aboutush2">Our Story</h2>
                    <p className="aboutusparagraph">B Organics, founded in October 2022, is a major participant in the organic agricultural business. They have a dedicated team of farmers who work on this idea on their own farms. They are also actively involved in converting conventional farmers to organic farming through NGOs, FPOs, FPCs, and cooperative societies. With the assistance of professional agriculturists, provide farmers with knowledge and support. E-commerce is enabled for B Organic's products. When it comes to choosing healthy and sustainable food selections, this is the way to go. Organic farming uses traditional agricultural practices to guarantee that the food produced is free of toxic fertilizers and chemicals. Organic food is not only healthier for us, but it is also more beneficial to the environment.</p>
                </div>
                <div className="about-us-image">
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713367084/B%20organics/5672606_eeif8g.jpg'
                    alt='Our story'
                    className='about-us-image'/>
                </div>
            </div>
            <div className='processofproducts'>
                <div className='about-us-icon'>
                    <FontAwesomeIcon icon={faPagelines} className='icons'/>
                    <p className='aboutus-para'>100% Genuine Product</p>
                </div>
                <div className='about-us-icon'>
                    <FontAwesomeIcon icon={faTruck} className='icons'/>
                    <p className='aboutus-para'>We delivery any locaton</p>
                </div>
                <div className='about-us-icon'>
                    <FontAwesomeIcon icon={faCircleCheck} className='icons'/>
                    <p className='aboutus-para'>Online safe payments</p>
                </div>
                <div className='about-us-icon'>
                    <FontAwesomeIcon icon={faRotate} className='icons'/>
                    <p className='aboutus-para'>Easy return policy</p>
                </div>
                <div className='about-us-icon'>
                    <FontAwesomeIcon icon={faClipboardList} className='icons'/>
                    <p className='aboutus-para'>Stringent Quality Standards</p>
                </div>
            </div>
            <div className="about-us-section">
                <div className="about-us-image">
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713369945/B%20organics/4400254_dbirv2.jpg'
                    alt='Stenth'
                    className='about-us-image'/>
                </div>
                <div className="about-us-content">
                    <h2 className="aboutush2 marjinajest">Strength</h2>
                    <p className="aboutusparagraph">B Organics provides Agri-clinical and commercial services to organic farms through a well-trained employee from both technical and non-technical levels. Customers can get fresh organic products at B Organics.</p>
                    <h2 className="aboutush2">Mission</h2>
                    <p className="aboutusparagraph">Our mission is to be a trustworthy and innovative global leader in the provision of real organic goods for healthy living.</p>
                </div>
            </div>
            <div className="about-us-section">
                <div className="about-us-content marjinajest">
                    <h2 className="aboutush2 mt-5">Mottos</h2>
                    <ul className="aboutuslist">
                        <li>B Organic is sourced directly from certified farmers across India and distributed globally. This brings the farmer trust and opens the possibility to organic farming, as well as makes the customer glad to eat nutritious food for a healthy lifestyle.</li>
                    </ul>
                </div>
                <div className="about-us-image">
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713367084/B%20organics/5586725_ye5jyz.jpg'
                    alt='Mottos'
                    className='about-us-image Mottos'/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
