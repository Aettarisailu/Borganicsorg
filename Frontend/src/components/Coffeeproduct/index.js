import { useEffect } from 'react';
import './index.css'
import {  Link } from "react-router-dom";

const HoneyBuypage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="honeybuypage-container">

            <div className="product-pics-container">
                <div className="main-img">
                    <img className="main-product-img" src='https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif' alt="Honey product" />
                </div>
                <div className="preview-imgs">
                    <img className="preview-product-img" src='https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif' alt="Honey product" />
                    <img className="preview-product-img" src='https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif' alt="Honey product" />
                    <img className="preview-product-img" src='https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif' alt="Honey product" />
                </div>
            </div>

            <div className='prdouct-card'>
                <h1 className="name-for-product">Honey</h1>
                <p className="product-discription">Honey is a natural sweet substance produced by honey bees from the nectar of 
                flowers. It is a thick, viscous liquid with a distinct golden color, although its shade can vary depending on 
                the types of flowers the bees collect nectar from. Honey has been consumed by humans for thousands of years and 
                is renowned for its pleasant taste, nutritional benefits, and medicinal properties.</p>
                <p className='product-price'>Price <span className='price-span'>500</span></p>
                <div className='prodcut-size-card'>
                    <p>Size</p>
                    <p className='prodcut-size'>250 gm</p>
                    <p className='prodcut-size'>500 gm</p>
                    <p className='prodcut-size'>1000 gm</p>
                </div>
                <div className='product-quantity'>
                    <p>Quantity</p>
                    <input type="number" id="tentacles" name="tentacles" min="1" max="20" defaultValue="1"  />
                </div>
                <div className='action-buttons'>
                <Link to="/login"><button className='buy-now-btn'>Buy Now</button></Link>
                   <button className='add-to-cart-btn'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}


export default HoneyBuypage