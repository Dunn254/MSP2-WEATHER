import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message); // Display success message
                setLoggedIn(true); // Update login state
                // Redirect user to dashboard or other protected route
                navigate('/dashboard');
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };

    const handleSignupClick = () => {
        navigate('/signup'); // Navigate to signup component
    };

    return (
        <div className="container text-dark">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control mb-2"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <div className="mt-3">
                <button className="btn btn-block btn-secondary" onClick={handleSignupClick}>Signup</button>
            </div>
        </div>
    );
};

export default LoginForm;
