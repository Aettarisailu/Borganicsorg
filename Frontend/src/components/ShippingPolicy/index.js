import React, { useEffect } from 'react';
import './ShippingPolicy.css'; // Import your CSS file

const ShippingPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shipping-policy-container">
            <div className="shipping-policy-row col-12 mt-5 p-5">
                <h1 className="shipping-policy-h1">Shipping Policy</h1>
                <p className="shipping-policy-paragraph">At B-Organics, we aim to provide reliable and efficient shipping services to deliver our premium organic honey and coffee products to you. Please review our shipping policy below:</p>
                <h3 className="shipping-policy-h3">1. Shipping Destinations</h3>
                <p className="shipping-policy-paragraph">We currently offer shipping to addresses within [list of countries/states/provinces where you ship]. If your location is not listed, please contact us to inquire about shipping options.</p>
                <h3 className="shipping-policy-h3">2. Shipping Methods</h3>
                <p className="shipping-policy-paragraph">We partner with reputable shipping carriers to ensure timely delivery of your orders. Shipping methods available at checkout may include standard shipping, expedited shipping, and international shipping options.</p>
                <h3 className="shipping-policy-h3">3. Processing Time</h3>
                <p className="shipping-policy-paragraph">Orders are typically processed and shipped within [number] business days after payment is received. Please note that processing times may vary during peak seasons or promotional periods.</p>
                <h3 className="shipping-policy-h3">4. Shipping Time</h3>
                <p className="shipping-policy-paragraph">Shipping times vary depending on your location and the shipping method selected at checkout. Estimated shipping times are provided during the checkout process and are based on the carrier's delivery estimates.</p>
                <h3 className="shipping-policy-h3">5. Shipping Charges</h3>
                <p className="shipping-policy-paragraph">Shipping charges are calculated based on the weight of your order, shipping destination, and the selected shipping method. Shipping costs will be displayed at checkout before you finalize your purchase.</p>
                <h3 className="shipping-policy-h3">6. Order Tracking</h3>
                <p className="shipping-policy-paragraph">Once your order has been shipped, you will receive a shipping confirmation email containing tracking information. You can use this information to track the status of your delivery online.</p>
                <h3 className="shipping-policy-h3">7. Delivery Issues</h3>
                <p className="shipping-policy-paragraph">While we make every effort to ensure timely delivery of your orders, unforeseen circumstances such as weather delays or carrier issues may occur. If you encounter any issues with your delivery, please contact us, and we will assist you in resolving the issue.</p>
                <h3 className="shipping-policy-h3">8. International Shipping</h3>
                <p className="shipping-policy-paragraph">For international orders, please note that customs clearance procedures may cause delays beyond our control. Import duties, taxes, and customs fees may apply and are the responsibility of the recipient.</p>
                <h3 className="shipping-policy-h3">9. Shipping Restrictions</h3>
                <p className="shipping-policy-paragraph">Certain products may be subject to shipping restrictions based on local regulations or carrier policies. We reserve the right to refuse shipping to certain locations or to modify shipping methods as necessary.</p>
                <h3 className="shipping-policy-h3">10. Contact Us</h3>
                <p className="shipping-policy-paragraph">If you have any questions or concerns about our shipping policy or the delivery of your order, please contact us at [contact information]. Our customer service team is here to assist you.</p>
            </div>
        </div>
    );
};

export default ShippingPolicy;
