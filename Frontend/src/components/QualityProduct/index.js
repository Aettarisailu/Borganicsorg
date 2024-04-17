import React, { useEffect } from 'react';
import './QualityProduct.css'; // Import your CSS file

const QualityProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="quality-product-container">
            <div className="quality-product-row col-12 mt-5 p-5">
                <h1 className="quality-product-h1">100% Quality Product</h1>
                <p className="quality-product-paragraph">At B-Organics, we are committed to delivering nothing but the finest quality organic honey and coffee products. Our dedication to quality begins with sourcing the best organic ingredients from trusted suppliers who share our values.</p>
                <h3 className="quality-product-h3">Organic Certification</h3>
                <p className="quality-product-paragraph">Our products are certified organic, ensuring that they are free from synthetic chemicals, pesticides, and GMOs. We prioritize sustainability and environmental stewardship throughout our production process.</p>
                <h3 className="quality-product-h3">Rigorous Quality Control</h3>
                <p className="quality-product-paragraph">Each batch of our products undergoes rigorous quality control measures to ensure consistency and purity. Our state-of-the-art facilities adhere to strict hygiene standards and are regularly inspected to maintain the highest quality standards.</p>
                <h3 className="quality-product-h3">Handcrafted Excellence</h3>
                <p className="quality-product-paragraph">Our products are carefully crafted by skilled artisans who take pride in their work. From harvesting premium honey to roasting the finest coffee beans, each step of the production process is carried out with precision and care.</p>
                <h3 className="quality-product-h3">Customer Satisfaction Guarantee</h3>
                <p className="quality-product-paragraph">We stand behind the quality of our products. If you are not completely satisfied with your purchase, please contact us, and we will do everything we can to make it right.</p>
                <p className="quality-product-paragraph">Experience the difference that quality makes with B-Organics. Shop with confidence, knowing that you are getting 100% quality products that you can trust.</p>
            </div>
        </div>
    );
};

export default QualityProduct;
