import './Termsandconditions.css'; // Import your CSS file
import React, { useEffect } from 'react';


const Termsandconditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
    }, []);
    return(
        <div className="Termsandconditionscontainer container">
            <div className="Termsandconditionsrow row col-12 mt-5 p-5">
                <h1 className="Termsandconditionsh1 mt-5">Terms and Conditions</h1>
                <p className="Termsandconditionsp">Welcome to B-Organics, your destination for premium organic honey and coffee products. By accessing our website and purchasing our products, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before making a purchase.</p>
                <p className="Termsandconditionsp">"B-Organics" refers to our company, which operates the e-commerce platform offering organic honey and coffee products."Customer," "you," and "your" refer to the user or purchaser of our products."Products" refer to the organic honey and coffee products available for sale on our website.</p>
                <h3 className="Termsandconditionsh3">Product Information</h3>
                <p className="Termsandconditionsp">We strive to provide accurate descriptions and images of our products; however, we cannot guarantee that colors and details will be accurately represented on every device.</p>
                <h3 className="Termsandconditionsh3">Pricing and Payment</h3>
                <p className="Termsandconditionsp">All prices are listed in [currency] and are subject to change without notice. Payment for orders must be made in full at the time of purchase. We accept [list accepted payment methods].</p>
                <h3 className="Termsandconditionsh3">Shipping and Delivery</h3>
                <p className="Termsandconditionsp">We aim to process and ship orders promptly. However, shipping times may vary depending on your location and product availability. We are not responsible for delays caused by shipping carriers or customs</p>
                <h3 className="Termsandconditionsh3">Returns and Refunds</h3>
                <p className="Termsandconditionsp">We stand behind the quality of our products. If you are not satisfied with your purchase, please contact us within [number] days of receiving your order to arrange for a return or exchange. Please note that certain conditions may apply.</p>
                <h3 className="Termsandconditionsh3">Privacy Policy</h3>
                <p className="Termsandconditionsp">We respect your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. By using our website, you consent to our Privacy Policy.</p>
                <h3 className="Termsandconditionsh3">Intellectual Property</h3>
                <p className="Termsandconditionsp">All content on our website, including logos, images, and text, is the property of B-Organics and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.</p>
                <h3 className="Termsandconditionsh3">Limitation of Liability</h3>
                <p className="Termsandconditionsp">In no event shall B-Organics be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our products or website.</p>
                <h3 className="Termsandconditionsh3">Governing Law</h3>
                <p className="Termsandconditionsp">These terms and conditions shall be governed by and construed in accordance with the laws of [your country/state]. Any disputes arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts in [your jurisdiction].</p>
                <h3 className="Termsandconditionsh3">Updates to Terms and Conditions</h3>
                <p className="Termsandconditionsp">We reserve the right to update or modify these terms and conditions at any time without prior notice. Continued use of our website and purchase of our products constitutes acceptance of any changes.</p>
                <p className="Termsandconditionsp">By making a purchase on our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</p>
            </div>
        </div>
    )
}

export default Termsandconditions;
