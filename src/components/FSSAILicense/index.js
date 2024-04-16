import React, { useEffect } from 'react';
import './FSSAILicenseInformation.css'; // Import your CSS file

const FSSAILicense = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="fssai-license-container">
            <div className="fssai-license-row col-12 mt-5 p-5">
                <h1 className="fssai-license-h1">FSSAI License Information</h1>
                <p className="fssai-license-paragraph">B-Organics is committed to ensuring the highest standards of food safety and quality in all our products. We are proud to be registered with the Food Safety and Standards Authority of India (FSSAI).</p>
                <p className="fssai-license-paragraph"><strong>FSSAI License Number:</strong> [Insert your FSSAI license number]</p>
                <p className="fssai-license-paragraph"><strong>Validity:</strong> [Insert the validity period of your FSSAI license]</p>
                <p className="fssai-license-paragraph"><strong>Scope of License:</strong> Our FSSAI license covers the manufacturing, processing, packaging, storage, and distribution of organic honey and coffee products.</p>
                <p className="fssai-license-paragraph">Compliance: We adhere to all regulations and guidelines set forth by the FSSAI to ensure the safety and quality of our products. Our facilities undergo regular inspections and audits to maintain compliance with food safety standards.</p>
                <p className="fssai-license-paragraph">Quality Assurance: Each batch of our products undergoes rigorous quality control measures to ensure that they meet or exceed FSSAI standards. We source our ingredients from trusted suppliers and maintain strict quality control throughout the production process.</p>
                <h3 className="fssai-license-h3">Contact Us</h3>
                <p className="fssai-license-paragraph">If you have any questions or concerns regarding our FSSAI license or the safety of our products, please contact us at [contact information]. Your satisfaction and trust are our top priorities.</p>
            </div>
        </div>
    );
};

export default FSSAILicense;
