import { useState, useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLeaf,faBowlFood,faEarthEurope,faUserShield} from '@fortawesome/free-solid-svg-icons';
// import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HoneyProducts from '../HoneyProducts';
import CoffeeProduct from '../CoffeeProducts';
import UserFeedback from '../Userfeedback'
import Footer from '../Footer'
import './index.css'; // Import the custom CSS file

const Landingpage = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://res.cloudinary.com/drevfgyks/image/upload/v1713029513/20240413_214115_v6le0r.jpg",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1713029510/20240413_221453_psbljp.jpg",
        "https://res.cloudinary.com/drevfgyks/image/upload/v1713029511/20240413_225433_muklxx.jpg"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * images.length);
            } while (nextIndex === currentImageIndex);
            setCurrentImageIndex(nextIndex);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex, images.length]);

    return (
        <>
            <div className='app smail col-12 col-sm-12 img-fluid' style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}></div>
            <div className='app-container'>
                <div>
                    <div className='Products-container'>
                        <HoneyProducts />
                        <CoffeeProduct />
                        <div className='container'>
                            <div className='row'>
                                {/* <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-5 mt-1 d-flex flex-row justify-content-center'>
                                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713122694/_2023012_Our_story_yhxv4t.png'
                                    className='lifeimage' alt='lifeimage'/>                            
                                </div> */}
                            </div>                           
                        </div>
                        <div className="Landingpage-whoweare2 ">
                            <div className='Landingpage-whoweare-top'>
                                <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713453074/B%20organics/100-Organic-PNG-Photo_sjc2gx.png'
                                className='organicsimage'
                                alt='img-landing' />                  
                            </div> 
                            <div className='Landingpage-whoweare row'>
                                <div className='whoweare-icons col-lg-4 col-xl-2 col-md-10 col-10'>
                                    <FontAwesomeIcon icon={faLeaf} className='who-icons'/>
                                    <p>Our farm-fresh produce is cultivated with care, free from pesticides and harmful chemicals.</p>
                                </div>
                                <div className='whoweare-icons col-lg-5 col-xl-2 col-md-10 col-10'>
                                    <FontAwesomeIcon icon={faBowlFood} className='who-icons'/>
                                    <p> our selection offers a delicious blend of taste and nutrition.</p>
                                </div>
                                <div className='whoweare-icons col-lg-4 col-xl-3 col-md-10 col-10'>
                                    <FontAwesomeIcon icon={faEarthEurope} className='who-icons'/>
                                    <p>Our farming methods are scientific and steered towards biodiversity conservation</p>
                                </div>
                                <div className='whoweare-icons col-lg-5 col-xl-2 col-md-10 col-10'>
                                    <FontAwesomeIcon icon={faUserShield} className='who-icons'/>
                                    <p>Our products from our farmers are healthy and biological safe for conception</p>
                                </div>                            
                            </div>
                            <div className='Landingpage-whoweare-top-2 row col-12'>
                                <div className='whyusheadeing col-12'>
                                    <p className='heading-1'>WHY US</p>
                                    <p className='heading-1'>We actively engage in converting conventional farmers to organic farming<br/>
                                     through partnerships with NGOs, FPOs, FPCs, and cooperative societies. </p>
                                </div>
                                <div className='whyusheadeing2'>
                                    <div className='col-2 product-details'>
                                        <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713450311/B%20organics/Fresh-PNG-Free-Image_gua0lm.png'
                                        className='whyusimage'
                                        alt='img-landing' />
                                        <h5>100% Fresh Products</h5>
                                        <p className='whyus-para'>our selection is carefully cultivated using sustainable farming practices.</p>
                                    </div>
                                    <div className='col-2 product-details'>
                                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713450311/B%20organics/100-Natural-PNG-Photo_mmn2tr.png'
                                    className='whyusimage'
                                    alt='img-landing' /> 
                                    <h5>100% Fresh Products</h5>
                                    <p className='whyus-para'>our selection is carefully cultivated using sustainable farming practices.</p>                                </div>
                                </div>
                                <div className='whyus-image-comtainer'>
                                    <div className='product-details col-2'>                                                                     
                                        <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713450311/B%20organics/healthy-eating_wgpk0n.png'
                                        className='whyusimage'
                                        alt='img-landing' />
                                        <h5>100% Fresh Products</h5>
                                        <p className='whyus-para'>our selection is carefully cultivated using sustainable farming practices.</p>
                                    </div>
                                    <div className='product-details'>
                                        <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713450311/B%20organics/healthy-eating_wgpk0n.png'
                                        className='whyusimage-bag'
                                        alt='img-landing' />
                                    </div>
                                    <div className='product-details col-2'>
                                        <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713450311/B%20organics/qnfs1_y1xq6x.png'
                                        className='whyusimage'
                                        alt='img-landing' />
                                        <h5>100% Fresh Products</h5>
                                        <p className='whyus-para'>our selection is carefully cultivated using sustainable farming practices.</p>
                                    </div>
                                </div>                 
                            </div>                                
                        </div>            
                        <UserFeedback/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landingpage;








