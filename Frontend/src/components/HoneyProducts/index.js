import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './index.css'

const HoneyProducts = () =>{
    return(
        <>
            <div className='container mb-5'>
                <div className='row col-12'>

                    <div className='col-12 col-sm-12 col-md-12 d-flex flex-row justify-content-start mt-2'>
                        <div className="Container-card mt-5">
                            <h1 className='m-5 Honey-products-heading'>Honey Products</h1>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mt-1 d-flex flex-row justify-content-center'>                           
                        <div className="card" style={{ width: '18rem' }}>
                        <Link to="/honeproduct"><img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/Screenshot_2024-02-21_213232_jlweur.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>                    
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mt-1 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                        <Link to="/honeproduct"><img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/image-305_m47bgc.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg- col-xl-4 mb-5 mt-1 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                        <Link to="/honeproduct"><img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712293568/Screenshot_2024-03-17_164011_vjky4j.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>
        </>
    )
}
export default HoneyProducts;