import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const CoffeeProduct = () =>{
    return(
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
                            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1710909448/coffee-cup-mockup_88130-332_b17do3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 mb-5 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1710909476/OIP_1_urk4ig.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 mb-5 d-flex flex-row justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1710909478/OIP_3_ju6i0g.jpg" className="card-img-top" alt="..." />
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
export default CoffeeProduct;