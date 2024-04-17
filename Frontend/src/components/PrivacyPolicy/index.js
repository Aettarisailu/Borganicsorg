import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);    
    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-row col-12 mt-5 p-5">
                <h1 className="privacy-policy-h1">Privacy Policy</h1>
                <p className="privacy-policy-paragraph">This Privacy Policy describes how B-Organics collects, uses, and protects the personal information you provide when using our website and purchasing our products.</p>
                <h3 className="privacy-policy-h3">1. Information We Collect</h3>
                <p className="privacy-policy-paragraph">Personal Information: When you make a purchase, we may collect personal information such as your name, email address, shipping address, and payment details.</p>
                <p className="privacy-policy-paragraph">Communications: We may collect information when you communicate with us via email or through our website, including your inquiries and feedback.</p>
                <p className="privacy-policy-paragraph">Website Usage: We may collect information about your use of our website, including IP address, browser type, pages visited, and referring website.</p>
                <h3 className="privacy-policy-h3">2. How We Use Your Information</h3>
                <p className="privacy-policy-paragraph">Order Processing: We use your personal information to process and fulfill your orders, communicate with you about your purchases, and provide customer support.</p>
                <p className="privacy-policy-paragraph">Marketing: With your consent, we may send you promotional emails about our products, special offers, and other updates. You can opt-out of these communications at any time.</p>
                <p className="privacy-policy-paragraph">Improvements: We may use your information to analyze website usage, improve our products and services, and customize your experience on our website.</p>
                <h3 className="privacy-policy-h3">3. Information Sharing</h3>
                <p className="privacy-policy-paragraph">Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and fulfilling orders.</p>
                <p className="privacy-policy-paragraph">Legal Compliance: We may disclose your information as required by law or in response to legal process, such as a subpoena or court order.</p>
                <p className="privacy-policy-paragraph">Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</p>
                <h3 className="privacy-policy-h3">4. Data Security</h3>
                <p className="privacy-policy-paragraph">We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, alteration, disclosure, or destruction.</p>
                <h3 className="privacy-policy-h3">5. Your Rights</h3>
                <p className="privacy-policy-paragraph">Access and Correction: You have the right to access and update your personal information. You may also request that we correct any inaccuracies or delete your information.</p>
                <p className="privacy-policy-paragraph">Opt-Out: You can opt-out of receiving promotional emails from us by following the instructions provided in the email or by contacting us directly.</p>
                <p className="privacy-policy-paragraph">Cookies: You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
                <h3 className="privacy-policy-h3">6. Children's Privacy</h3>
                <p className="privacy-policy-paragraph">Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children.</p>
                <h3 className="privacy-policy-h3">7. Changes to this Privacy Policy</h3>
                <p className="privacy-policy-paragraph">We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.</p>
                <h3 className="privacy-policy-h3">8. Contact Us</h3>
                <p className="privacy-policy-paragraph">If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at [contact information].</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
