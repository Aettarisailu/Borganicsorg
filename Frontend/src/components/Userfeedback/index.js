import './index.css'
import { CiUser } from "react-icons/ci";

const usereviews = {
    "reviews": [
        {
            "name": "Aarav Sharma",
            "review": "This honey reminds me of my childhood! Its taste brings back memories of my mom's kitchen. It's completely natural and I always keep it in my home."
        },
        {
            "name": "Nisha Singh",
            "review": "I needed ethically sourced honey for my health, and this exceeds expectations. The taste is also wonderful!"
        },
        {
            "name": "Priya Desai",
            "review": "This honey is special to me because it's especially loved by my family. We all enjoy it in our breakfast, and it's always our favorite."
        },
        {
            "name": "Ananya Gupta",
            "review": "The taste of my food has completely changed! This pure honey has elevated my breakfast to a whole new level. This remedy is truly beneficial for my health."
        },
        {
            "name": "Rohan Patel",
            "review": "What an amazing taste! This feels like the right choice for both ethics and health. When I mixed it with my coffee, I didn't just find a new taste, I found a new discovery!"
        },
        {
            "name": "Aarav Sharma",
            "review": "This honey reminds me of my childhood! Its taste brings back memories of my mom's kitchen. It's completely natural and I always keep it in my home."
        },
        {
            "name": "Nisha Singh",
            "review": "I needed ethically sourced honey for my health, and this exceeds expectations. The taste is also wonderful!"
        },
        {
            "name": "Rohan Patel",
            "review": "What an amazing taste! This feels like the right choice for both ethics and health. When I mixed it with my coffee, I didn't just find a new taste, I found a new discovery!"
        }
        
    ]
}

const UserFeedback = () => {

    return (
        <div className="user-feedback-container">

            {usereviews.reviews.map((item, index) => (
                <div key={index} className="user-review-card">
                    <div style={{display:'flex',alignItems:"center"}}>
                        <CiUser style={{ fontSize: '1.5em', marginRight: '10px', }} />
                        <p className="user-name"><b>{item.name}</b></p>
                    </div>
                    <div className="user-review">
                        <p>{item.review}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default UserFeedback

