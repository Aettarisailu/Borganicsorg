import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import Footer from '../Footer'
import './Contact.css';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send email data to backend API
            const response = await axios.post('http://localhost:3004/api/send-email', formData);
            console.log(response.data); // Assuming backend sends back a success message
            // Optionally, display a success message to the user
        } catch (error) {
            console.error('Error sending email:', error);
            // Optionally, display an error message to the user
        }
    };

    return (
        <>
        <div className="contact-container mb-5">
            <div className='container-1'>
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-details">
                        <h3>Reach Out</h3>
                        <ul>
                            <li>Email: info@borganics.in</li>
                            <li>WhatsApp: +91 99627 54292</li>
                        </ul>
                        <div className="social-media-links">
                            <a href="https://www.instagram.com/borganics.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/company/borganics/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h3 className='mt-5'>Send us a message</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="message-input"
                        />
                        <button type="submit">Send Message</button>
                    </form>                    
                </div>                               
            </div>
            <div className='container-2'>
                <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713790541/B%20organics/2308-w030-n003-821A-p30-821_tzhm55.jpg' 
                className='Contactimage'
                alt='comment'/>
            </div>            
        </div>
        <Footer/>      
        </>
    );
}

export default ContactUs;
