import { useEffect } from 'react';
import React from 'react';
import './index.css';

const ConfirmedOrder = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='right-tick-container'>
            <img
                src='https://res.cloudinary.com/drevfgyks/image/upload/v1713128204/R_1_lncsta.png'
                className='right-tick'
                alt='righttick'
            />
            <p className='mt-4 orderconform'>Your order has been confirmed.</p>
        </div>
    );
};

export default ConfirmedOrder;
