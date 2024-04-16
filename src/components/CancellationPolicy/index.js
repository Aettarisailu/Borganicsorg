import React, { useEffect } from 'react';
import './CancellationPolicy.css'; // Import your CSS file

const CancellationPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="cancellation-policy-container">
            <div className="cancellation-policy-row col-12 mt-5 p-5">
                <h1 className="cancellation-policy-h1">Cancellation Policy</h1>
                <p className="cancellation-policy-paragraph">At B-Organics, we understand that sometimes circumstances change, and you may need to cancel your order. Please review our cancellation policy below:</p>
                <h3 className="cancellation-policy-h3">1. Order Cancellation</h3>
                <p className="cancellation-policy-paragraph">Before Shipment: If you wish to cancel your order before it has been shipped, please contact us as soon as possible. We will make every effort to accommodate your request and provide a full refund.</p>
                <p className="cancellation-policy-paragraph">After Shipment: Once your order has been shipped, it cannot be canceled. You may return the items according to our return policy (refer to our Terms and Conditions for details).</p>
                <h3 className="cancellation-policy-h3">2. Subscription Cancellation</h3>
                <p className="cancellation-policy-paragraph">Before Renewal: If you wish to cancel a subscription-based order before it renews, please notify us before the renewal date. We will cancel your subscription and prevent any future charges.</p>
                <p className="cancellation-policy-paragraph">After Renewal: Subscriptions that have already been renewed cannot be canceled mid-term. However, you may cancel future renewals by notifying us before the next renewal date.</p>
                <h3 className="cancellation-policy-h3">3. Refunds</h3>
                <p className="cancellation-policy-paragraph">Refund Processing: Refunds for canceled orders will be processed using the original payment method within [number] business days of receiving your cancellation request.</p>
                <p className="cancellation-policy-paragraph">Partial Refunds: In some cases, a partial refund may be issued if the order has already been partially fulfilled or if any non-refundable fees apply (e.g., shipping costs).</p>
                <h3 className="cancellation-policy-h3">4. Contact Us</h3>
                <p className="cancellation-policy-paragraph">If you need to cancel your order or have any questions about our cancellation policy, please contact us at [contact information]. Our customer service team will be happy to assist you.</p>
            </div>
        </div>
    );
};

export default CancellationPolicy;
