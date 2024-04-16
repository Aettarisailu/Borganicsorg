import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HoneyProducts from '../HoneyProducts';
import CoffeeProduct from '../CoffeeProducts';
import UserFeedback from '../Userfeedback'
import Footer from '../Footer'
import './index.css'; // Import the custom CSS file

const Landingpage = ({ history }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        // "https://res.cloudinary.com/drevfgyks/image/upload/v1711383242/pexels-lisa-fotios-1031641_onnbgs.jpg",
        // "https://res.cloudinary.com/drevfgyks/image/upload/v1711383241/pexels-caio-65550_vg0m3v.jpg",
        // "https://res.cloudinary.com/drevfgyks/image/upload/v1712846293/8401420_j11508.jpg",
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
            <div className='app' style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
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
                        <UserFeedback/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landingpage;









{/* <div className="container-fluid mb-5"> Use container-fluid for full-width container start carousel
                        <div className="carousel-container">
                            <div className="">                                
                                <div className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner" >
                                        <div className="carousel-item active">
                                            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712846692/4175687_e359dz.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712846724/7879154_tum8wn.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712846293/8401420_j11508.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    End carousel */}