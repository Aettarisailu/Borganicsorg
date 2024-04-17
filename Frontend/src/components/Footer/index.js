import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faWhatsapp,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {  Link } from "react-router-dom";
import './index.css'

const handleWhatsappRedirect = () => {
    const whatsappNumber = '9962754292'; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hello! I have a question.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.location.href = whatsappUrl;
    // window.open(whatsappUrl, '_blank');
};

const Footer = () =>{
    return(
        <>
        <div class="bg-container">
        <div class="container">
            <div class="row">
                <div  class="col-12 col-md-6 col-lg-3 text-center pt-5 pb-3">
                    <div className='company-container2'>
                    <div className='company-container'>
                    <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png" class="logofooter" />
                    <p className='footer-comapnay-name'>B Organics</p>
                    </div>
                    <div class="col-12 col-md-6 d-flex flex-row justify-content-center">
                        <div class="media pb-2 pt-2">
                            <a href="https://www.linkedin.com/company/borganics/" target="_blank" rel="noopener noreferrer" className='socialMedia'>
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>                        
                        <div class="media pb-2 pt-2">
                            <a href="https://www.instagram.com/borganics.in/" target="_blank" rel="noopener noreferrer" className='socialMedia'>
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div class="media pb-2 pt-2" onClick={handleWhatsappRedirect}>
                            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon"/>
                        </div>
                        <div class="media pb-2 pt-2">
                            <a href="mailto:info@borganics.in" target="_blank" rel="noopener noreferrer" className='socialMedia'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                        </div>
                    </div>                   
                </div>

                {/* <div class="col-6 col-md-6 col-lg-3 pt-5 products-container">
                    <Link to='/About'><h1 class="para pt-3">About</h1></Link>
                    <Link to='/Menu' ><p className="para footer-section-mail-id">Explore Menu</p></Link>
                    <Link to='/whychooseus' ><p className="para">Why Choose Us?</p></Link>                    
                </div> */}
                   
                <div class="col-6 col-md-4 col-lg-3 order-3 order-lg-2 pt-5 ">
                        <div class="col-12 col-md-6 col-lg-6 products-container">
                            <Link to='/About' class="para"><h1 class="para pt-3">About</h1></Link>
                            <Link to='/Menu' class="para" ><p className="para footer-section-mail-id">Explore Menu</p></Link>
                            <Link to='/whychooseus' class="para" ><p className="para">Why Choose Us?</p></Link>      
                        </div>                       
                        <div class="col-12 col-md-6 col-lg-6 products-container">
                            <h1 class="footer-comapnay-name pb-3 pt-3">Location</h1>
                            <h1 class="headingfooter">Head Office : Chennai</h1>
                            <p className='headingfooter'>www.borganics.in</p>
                            <p class="para">info@borganics.in</p>
                        </div> 
                        </div>
                        <div class="col-6 col-md-6 col-lg-3 order-2 order-lg-3 pt-5 products-container">
                            <h1 class="heading2 pb-3 pt-3">We promise you</h1>
                            <Link to="/qualityproduct"><p class="para">100% Quality Product</p></Link>
                            <Link to="/protectyourdetails"><p class="para">Protect Your Details</p></Link>
                        </div>
                        <div class="col-6 col-md-6 col-lg-3 order-2 order-lg-3 pt-5 products-container">
                            <h1 class="heading2 pb-3 pt-3">Information</h1>
                            <Link to="/termsandconditions"><p class="para">Terms and conditions</p></Link>
                            <Link to="/privacypolicy"><p class="para">Privacy policy</p></Link>
                            <Link to="/cancellationpolicy"><p class="para">Cancellation policy</p></Link>
                            <Link to="/fssailicense"><p class="para">FSSAI licence</p></Link>
                            <Link to="/shippingpolicy"><p class="para">Shipping policy</p></Link>
                        </div>                      
                </div>
        </div>
        <hr class="hr-line" />
        <div class="para text-center pb-5">
            <i class="far fa-copyright">Copyrights received © 2024 Borganics.</i>
        </div>
    </div>
    </>
    )
}
export default Footer;