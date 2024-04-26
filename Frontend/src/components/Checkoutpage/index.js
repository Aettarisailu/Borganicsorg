import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import './index.css'; // Import CSS file for CheckoutPage styles

const CheckoutPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const location = useLocation();
  const selectedProduct = location.state ? location.state.selectedProduct : {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    pin: '',
    paymentMethod: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    pin: '',
    phone: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission, such as sending data to server, etc.
    validateForm();
    console.log(formData);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate firstName
    if (!formData.firstName.trim()) {
      errors.firstName = 'Please enter your first name';
      isValid = false;
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      errors.lastName = 'Please enter your last name';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
      isValid = false;
    }

    // Validate address
    if (!formData.address.trim()) {
      errors.address = 'Please enter your address';
      isValid = false;
    }

    // // Validate city
    // if (!formData.city.trim()) {
    //   errors.city = 'Please enter your city';
    //   isValid = false;
    // }

    // // Validate country
    // if (!formData.country.trim()) {
    //   errors.country = 'Please select your country';
    //   isValid = false;
    // }

    // // Validate state
    // if (!formData.state.trim()) {
    //   errors.state = 'Please select your state';
    //   isValid = false;
    // }

    // Validate zip
    if (!formData.pin.trim()) {
      errors.zip = 'Please enter your ZIP code';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number';
      isValid = false;
    }

    // Validate paymentMethod
    if (!formData.paymentMethod.trim()) {
      errors.paymentMethod = 'Please select a payment method';
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  return (
    <>
    <div className="CheckoutPage-checkout-container">
      <div className="selected-product-details">
        <h1 className='mb-5 Selected-heading'>Selected Product Details:</h1>
        <p>Name: {selectedProduct.name}</p>
        <p>Size: {selectedProduct.size}</p>
        <p>Price: {selectedProduct.price}</p>
      </div>
      <div className="CheckoutPage-checkout-form-container">
        <h1 className="CheckoutPage-checkout-heading">Checkout</h1>
        <form onSubmit={handleSubmit} className="checkoutpage-form">
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">Full Name</label>
            <input type="text" className="form-control checkoutpage-input" name="firstName" value={formData.firstName} onChange={handleChange} required />
            {formErrors.firstName && <span className="checkoutpage-error">{formErrors.firstName}</span>}
          </div>
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">Email</label>
            <input type="email" className="form-control checkoutpage-input" name="email" value={formData.email} onChange={handleChange} required />
            {formErrors.email && <span className="checkoutpage-error">{formErrors.email}</span>}
          </div>
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">Phone No</label>
            <input type="tel" className="form-control checkoutpage-input" name="phone" value={formData.phone} onChange={handleChange} required />
            {formErrors.phone && <span className="checkoutpage-error">{formErrors.phone}</span>}
          </div>
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">Address</label>
            <input type="text" className="form-control checkoutpage-input" name="address" value={formData.address} onChange={handleChange} required />
            {formErrors.address && <span className="checkoutpage-error">{formErrors.address}</span>}
          </div>
          {/* <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">Country</label>
            <select className="form-control checkoutpage-input" name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select Country</option>
              <option value="India">India</option>
            </select>
            {formErrors.country && <span className="checkoutpage-error">{formErrors.country}</span>}
          </div>
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">State</label>
            <select className="form-control checkoutpage-input" name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
            </select>
            {formErrors.state && <span className="checkoutpage-error">{formErrors.state}</span>}
          </div>
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">City</label>
            <select className="form-control checkoutpage-input" name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select City</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Warangal">Warangal</option>
              <option value="Nizamabad">Nizamabad</option>
              <option value="Karimnagar">Karimnagar</option>
              <option value="Ramagundam">Ramagundam</option>
              <option value="Khammam">Khammam</option>
              <option value="Mahbubnagar">Mahbubnagar</option>
              <option value="Nalgonda">Nalgonda</option>
              <option value="Adilabad">Adilabad</option>
              <option value="Siddipet">Siddipet</option>
              <option value="Miryalaguda">Miryalaguda</option>
              <option value="Suryapet">Suryapet</option>
              <option value="Jagtial">Jagtial</option>
              <option value="Peddapalli">Peddapalli</option>
              <option value="Bhongir">Bhongir</option>
              <option value="Kamareddy">Kamareddy</option>
              <option value="Sangareddy">Sangareddy</option>
              <option value="Nirmal">Nirmal</option>
              <option value="Wanaparthy">Wanaparthy</option>
              <option value="Kothagudem">Kothagudem</option>
            </select>
            {formErrors.city && <span className="checkoutpage-error">{formErrors.city}</span>}
          </div> */}
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">PIN Code</label>
            <input type="text" className="form-control checkoutpage-input" name="zip" value={formData.zip} onChange={handleChange} required />
            {formErrors.zip && <span className="checkoutpage-error">{formErrors.zip}</span>}
          </div>
          <div className="form-group checkoutpage-form-group">
            <label className="checkoutpage-label">Payment Method</label>
            <select className="form-control checkoutpage-input" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
              <option value="">Select Payment Method</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="upi">UPI</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
            {formErrors.paymentMethod && <span className="checkoutpage-error">{formErrors.paymentMethod}</span>}
          </div>

          <Link to="/Confimedorder"><button type="submit" className="btn btn-primary checkoutpage-btn">Place Order</button></Link>        
        </form>
      </div>     
    </div>
    <Link to="/honeybuypage" className="btn btn-secondary m-3">Go Back</Link>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
