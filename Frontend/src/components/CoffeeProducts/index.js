import React, { useEffect } from 'react';
import Coffee_Arabico from './Coffeeimages/Coffee_Arabico-250g.jpg';
import coffee_Robusta from './Coffeeimages/coffee_Robusta_250g.jpg';
import './index.css';

const CoffeeProduct = () => {
    useEffect(() => {
        // Prevent right-click context menu on the entire document
        const preventRightClick = (e) => {
            e.preventDefault();
        };
        window.addEventListener('contextmenu', preventRightClick);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('contextmenu', preventRightClick);
        };
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <>
            <div className='container'>
                <div className='row col-12 mt-5'>
                    <div className='col-12 col-sm-12 col-md-12 d-flex flex-row justify-content-start mb-5 mt-2'>
                        <div className="Container-card">
                            <h1 className='mt-5 coffee-products-heading'>Coffee Products</h1>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-4 mb-5 d-flex flex-row justify-content-center'>                           
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={Coffee_Arabico} className="card-img-top" alt="Coffee Arabico" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 mb-5 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={coffee_Robusta} className="card-img-top" alt="Coffee Robusta" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>                    
                </div>                        
            </div>
        </>
    );
};

export default CoffeeProduct;
