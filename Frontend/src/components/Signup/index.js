import React, { useState } from 'react';
import './index.css';

const Signup = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '', // Changed from 'Password' to 'password'
        username: '',
        phoneNumber: ''       
    });

    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [showEmptyFieldWarning, setShowEmptyFieldWarning] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        console.log(userData);

        fetch("http://192.168.192.1:3100/user/register",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ userData })
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Failed to register user');
            }
            return response.json();
        }).then((data) => {
            console.log(data);
            // Add any additional logic for successful form submission
        }).catch((error) => {
            console.error('Error:', error);
            // Handle error (e.g., show error message to the user)
        });
    };

    return (
        <div className="NewUserForm-new-user-form mt-5">
            <h2 className='mt-5'>Create New Account</h2>
            {showEmptyFieldWarning && <p className="NewUserForm-warning">Please fill all required fields.</p>}
            {passwordMismatch && <p className="warning">Passwords do not match.</p>}
            <form onSubmit={handleSubmit} >
                <div className='NewUserForm-container'>                            
                    <div className="NewUserForm-form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={userData.username} onChange={handleChange} />
                    </div>
                    <div className="NewUserForm-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
                    </div>
                    <div className="NewUserForm-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" value={userData.email} onChange={handleChange} />
                    </div>
                    <div className="NewUserForm-form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
