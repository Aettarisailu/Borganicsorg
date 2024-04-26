import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const RecommendProduct = ({ id, imageSrc, name, price, size, selectedSize, addToCart, buyNow }) => {
  // const handleAddToCart = () => {
  //   addToCart({ id, name, price, size, selectedSize });
  // };

  // const handleBuyNow = () => {
  //   buyNow({ id, name, price, size, selectedSize });
  // };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="recomend-product-card shadow p-3 mb-4">
        <img src={imageSrc} className="recomend-product-image" alt={name} />
        <div className="recomend-product-details">
          <h2 className="recomend-product-name">{name}</h2>
          <p className="recomend-product-price">{price}</p>
          <p className="recomend-product-size">{selectedSize}</p> {/* Display selected size */}
          {/* <div className="recomend-button-container">
            <button className="recomend-add-to-cart-button" onClick={handleAddToCart}>
              Add Cart
            </button>
            <button className="recomend-buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

RecommendProduct.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  selectedSize: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
};

export default RecommendProduct;
