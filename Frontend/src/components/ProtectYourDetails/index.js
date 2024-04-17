import React, { useEffect } from 'react';
import './ProtectYourDetails.css'; // Import your CSS file

const ProtectYourDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="protect-details-container">
            <div className="protect-details-row col-12 mt-5 p-5">
                <h1 className="protect-details-h1">Protect Your Details</h1>
                <p className="protect-details-paragraph">At B-Organics, we take your privacy and security seriously. We are committed to protecting your personal information and ensuring that your details remain safe and secure when you shop with us.</p>
                <h3 className="protect-details-h3">Secure Transactions</h3>
                <p className="protect-details-paragraph">We utilize industry-standard encryption and security protocols to safeguard your sensitive information during online transactions. Our secure checkout process ensures that your payment details are encrypted and protected from unauthorized access.</p>
                <h3 className="protect-details-h3">Privacy Assurance</h3>
                <p className="protect-details-paragraph">We respect your privacy and will never share, sell, or rent your personal information to third parties without your consent. Your details are used solely for the purpose of processing your orders and providing you with the best possible shopping experience.</p>
                <h3 className="protect-details-h3">Data Protection</h3>
                <p className="protect-details-paragraph">We employ robust data protection measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal information. Our systems are regularly monitored and updated to ensure the highest level of security.</p>
                <h3 className="protect-details-h3">Transparent Policies</h3>
                <p className="protect-details-paragraph">Our privacy policy outlines how we collect, use, and protect your data. We encourage you to review our privacy policy to understand how we handle your information and your rights regarding your personal data.</p>
                <h3 className="protect-details-h3">Stay Informed</h3>
                <p className="protect-details-paragraph">We will notify you promptly in the event of any security breaches or incidents that may affect your personal information. Your trust is important to us, and we are committed to keeping you informed and protected.</p>
                <h3 className="protect-details-h3">Contact Us</h3>
                <p className="protect-details-paragraph">If you have any questions or concerns about the security of your details or our privacy practices, please don't hesitate to contact us. Our customer service team is here to assist you and address any inquiries you may have.</p>
                <p className="protect-details-paragraph">Shop with confidence knowing that your details are safe and secure with B-Organics. Your trust is our priority, and we are dedicated to protecting your privacy every step of the way.</p>
            </div>
        </div>
    );
};

export default ProtectYourDetails;
