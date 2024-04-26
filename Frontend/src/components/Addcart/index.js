import { useEffect } from 'react';
import './index.css'

const Addcart = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div>
            <div className='Addcart-container'>
                <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1713193162/3960310_gb3v0a.jpg'
                className='Addcart'
                alt='Addcart'/>
                <p className='Addcart-text'>Choose Your Favourite</p>
            </div>
        </div>
    )
}

export default Addcart;