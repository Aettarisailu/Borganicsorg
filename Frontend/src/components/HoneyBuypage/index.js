import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import RecommendProduct from '../RecommendProduct'
import wildHoneypic from './Honeyimages/Moringa_Honey-250gm.jpg';
import wildHoneypic50 from './Honeyimages/Moringa_Honey-50gm.jpg';
import wildHoneypic100 from './Honeyimages/wildHoney_100gm.jpg';
import './index.css'

const HoneyBuypage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedSize, setSelectedSize] = useState("250g");
  const [selectedProduct, setSelectedProduct] = useState({
    name: 'Wild Forest Honey',
    size: '250g',
    price: 'Rs 299.99',
  });


  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  
  useEffect(() => {
    if (selectedSize) {
      setSelectedProduct({
        name: 'Wild Forest Honey',
        size: selectedSize,
        price: getPrice(selectedSize),
      });
    }
  }, [selectedSize]);

  const getPrice = (size) => {
    switch (size) {
      case '50g':
        return 'Rs 99.99';
      case '100g':
        return 'Rs 199.99';
      case '250g':
        return 'Rs 299.99';
      default:
        return '';
    }
  };

  const handleBuyNow = () => {
    const selectedProduct = {
      name: 'Wild Forest Honey',
      size: selectedSize,
      price: getPrice(selectedSize),
    };
    navigate('/checkoutpage', { state: { selectedProduct } }); // Navigate to checkout page with state
  };

  return (
    <>
      <div className='Honey-product-container'>
        <div className='container mt-5'>
          <div className='row'>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex  justify-content-center">
              <div className="product-bottle">
                <div className="product-card-container">
                  <div>
                    {/* Product Image and Preview Images */}
                    {selectedSize === "50g" && (
                      <img src={wildHoneypic50}
                      className='Honey-product' alt="Honey product" />

                    )}
                    {selectedSize === "100g" && (
                      <img src={wildHoneypic100} className='Honey-product' alt="Honey product" />
                    )}
                    {selectedSize === "250g" && (
                      <img src={wildHoneypic} className='Honey-product' alt="Honey product" />
                    )}
                  </div>
                </div>
                {/* Other product preview images */}
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5 justify-content-center'>
              <h1 className="name-for-product mt-5">Wild Forest Honey</h1>
              <div>
                    {/* Product Image and Preview Images */}
                    {selectedSize === "50g" && (
                      <p>size : 50g<br/>Price : Rs 99.99</p>             
                    )}
                    {selectedSize === "100g" && (
                      <p>size : 100g<br/>Price : Rs 199.99</p> 
                    )}
                    {selectedSize === "250g" && (
                      <p>size : 250g<br/>Price : Rs 299.99</p> 
                    )}
                  </div>
              {/* Product description */}
              <div className='prodcut-size-card'>
                <p>Size</p>
                <p className='prodcut-size' onClick={() => handleSizeClick("50g")}>50 gm</p>
                <p className='prodcut-size' onClick={() => handleSizeClick("100g")}>100 gm</p>
                <p className='prodcut-size' onClick={() => handleSizeClick("250g")}>250 gm</p>
              </div>
              <div className='button_container'>
              <Link
                to={{
                  pathname: "/checkoutpage",
                  state: { selectedProduct: selectedProduct } // Pass selected product details as state
                  
                }}                
                >
                <button className='button_BuyNow' onClick={handleBuyNow}>Buy Now</button>
              </Link>
                {/* <button className='button_AddCart'>Add Cart</button> */}
              </div>
              {/* Other product details */}
            </div>
          </div>
        </div>
        <hr className='hrClass'/>
        <div className="explore-menu-section2 pt-5 pb-5" id="exploreMenuSection">
          <div className="container">
            <div className="row justify-content-center text_center">
              <div className="col-12">
                <h1 className="menu-section-heading mb-5">Recommendation</h1>
              </div>
              {/* Pass selectedSize as prop to RecommendProduct */}
              <RecommendProduct
                imageSrc={wildHoneypic50}
                name="Wild Forest Honey-50g"
                price="Rs 99.99"
                size="50g"
              />
              <RecommendProduct
                imageSrc={wildHoneypic100}
                name="Wild Forest Honey-100g"
                price="Rs 199.99"
                size="100g"
              />
              <RecommendProduct
                imageSrc={wildHoneypic}
                name="Wild Forest Honey-250g"
                price="Rs 299.99"
                size="250g"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HoneyBuypage;
