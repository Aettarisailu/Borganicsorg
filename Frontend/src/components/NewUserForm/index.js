import React, { useState } from 'react';
import './index.css';

const NewUserForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        Password: '',
        ConfirmPassword: '',
        FullName: '',
        phoneNumber: '',
        AlternatePhoneNumber: '',
        gender: ''        
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
            body: JSON.stringify({userData})
        }).then((response) => {
            response.json().then((msg) =>{
                console.log(msg)
            }
                
            )
        })
        console.log("after submit");

        console.log(userData);


        // If all validations pass, submit the form
        // You can send this data to your backend using POST method
        // Example: fetch('/api/create-user', { method: 'POST', body: JSON.stringify(userData) });
    };

    return (
        <div className="NewUserForm-new-user-form">
            <h2>Create New Account</h2>
            {showEmptyFieldWarning && <p className="NewUserForm-warning">Please fill all required fields.</p>}
            {passwordMismatch && <p className="warning">Passwords do not match.</p>}
                <form onSubmit={handleSubmit} >
                    <div className='NewUserForm-container'>{/* one-container */}
                        <div> {/* one-container */}
                            <div className="NewUserForm-form-group">
                                <label htmlFor="Email">Email *</label>
                                <input type="text" id="Email" name="email" value={userData.email} onChange={handleChange} />
                            </div>
                            <div className="NewUserForm-form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="text" id="Password" name="Password" value={userData.Password} onChange={handleChange} />
                            </div>
                            <div className="NewUserForm-form-group">
                                <label htmlFor="ConfirmPassword">ConfirmPassword</label>
                                <input type="tel" id="ConfirmPassword" name="ConfirmPassword" value={userData.ConfirmPassword} onChange={handleChange} />
                            </div>
                            <div className="NewUserForm-form-group">
                                <label htmlFor="FullName">FullName</label>
                                <input type="tel" id="FullName" name="FullName" value={userData.FullName} onChange={handleChange} />
                            </div>
                           
                        </div>

                        <div> 
                            <div className="NewUserForm-form-group">
                                <label htmlFor="phoneNumber">PhoneNumber</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
                            </div>
                            <div className="NewUserForm-form-group">
                                <label htmlFor="AlternatePhoneNumber">AlternatePhoneNumber </label>
                                <input type="AlternatePhoneNumber" id="AlternatePhoneNumber" name="AlternatePhoneNumber" value={userData.AlternatePhoneNumber} onChange={handleChange} />
                            </div>
                            <div className="NewUserForm-form-group">
                                    <label htmlFor="gender">Gender</label>
                                <select id="gender" name="gender" value={userData.gender} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default NewUserForm;
