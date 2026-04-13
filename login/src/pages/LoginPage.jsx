import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/Auth/login', {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.success) {
                navigate('/dashboard');
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            console.error(error);  // Log the full error to the console for debugging

            if (error.response) {
                // Request was made and the server responded with a status other than 2xx
                console.error("Response error:", error.response);  // Log the full response error
                setError(error.response.data.message || 'An error occurred');
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Request error:", error.request);  // Log the request error
                setError('No response from the server');
            } else {
                // Something else happened in setting up the request
                console.error("General error:", error.message);  // Log general error
                setError('An error occurred');
            }
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;