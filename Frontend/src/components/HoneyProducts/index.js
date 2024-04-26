import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../Footer';
import { Link } from "react-router-dom";
import wildHoneypic from './Honeyimages/wildHoney_250gm.jpg';
import AcaciaHoneypic from './Honeyimages/Acacia_Honey-250gm.jpg';
import MoringaHoneypic from './Honeyimages/Moringa_Honey-250gm.jpg';
import './index.css'

const HoneyProducts = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <div className='container mb-5 mt-3'>
                <div className='row col-12'>

                    <div className='col-12 col-sm-12 col-md-12 d-flex flex-row justify-content-start mt-2'>
                        <div className="Container-card mt-5">
                            <h1 className='m-5 Honey-products-heading'>Honey Products</h1>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mt-1 d-flex flex-row justify-content-center'>                           
                        <div className="card" style={{ width: '18rem' }}>
                        <Link to="/honeybuypage"><img src={MoringaHoneypic} className="card-img-top" alt="wildHoneypic" /></Link>
                            <div className="card-body">
                                <h5>Wild Forest Honey</h5>
                                <p className="card-text"><span className='Available'>Available: </span> 50gm, 100gm, 250gm.</p>                                                        
                            <div className='buttons-container'>
                            <p className='pricetext'>Rs 99.00</p>  
                                <Link to="/honeybuypage"><button className='btn btn-success btn_buybutton'>Buy Now</button></Link>
                                {/* <button className='btn btn-warning'>Add Cart</button> */}
                            </div> 
                            </div>                          
                        </div>
                    </div>                    
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mt-1 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                        <Link to="/honeproduct"><img src={AcaciaHoneypic} className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5>Acacia Honey</h5>
                                <p className="card-text"><span className='Available'>Available: </span> 50gm, 100gm, 250gm.</p>                               
                            <div className='buttons-container'>
                            <p className='pricetext'>Rs 99.00</p>
                            <Link to="/honeybuypage"><button className='btn btn-success btn_buybutton'>Buy Now</button></Link>
                                {/* <button className='btn btn-warning'>Add Cart</button> */}
                            </div> 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg- col-xl-4 mb-5 mt-1 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                        <Link to="/honeproduct"><img src={wildHoneypic} className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                                <h5>Moringa Honey</h5>
                                <p className="card-text"><span className='Available'>Available: </span> 50gm, 100gm, 250gm.</p>                                
                            <div className='buttons-container'>
                            <p className='pricetext'>Rs 99.00</p>
                            <Link to="/honeybuypage"><button className='btn btn-success btn_buybutton'>Buy Now</button></Link>
                                {/* <button className='btn btn-warning'>Add Cart</button> */}
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>                                    
            </div>
            {/* <Footer/>  */}
        </>
    )
}
export default HoneyProducts;