import React, { useState } from 'react';
import Landingpage from '../Landingpage';
import { Link } from 'react-router-dom';
import './index.css';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false); // State to track error

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setError(false); // Reset error state when username changes
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setError(false); // Reset error state when password changes
    };

    const handleLogin = () => {
        if (username === "Username" && password === "Password") {
            // Login successful
            console.log("Login successful");
            <Landingpage/>
        } else {
            // Invalid credentials
            console.log("Invalid credentials");
            setError(true); // Set error state to true
        }
    };

    return (
        <div className="login-container">
            <h1 className="heading">Login Now</h1>            
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {error && <p className="error-message">Invalid username or password</p>} {/* Error message */}
                <div className="button-container">
                    <button className="login-button" type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
            <div className="or-divider">
                <p>OR</p>
            </div>
            <Link to="/signup"><p className="create-account">Create New Account</p></Link>
        </div>
    );
};

export default UserLogin;

