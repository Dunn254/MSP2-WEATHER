import React from 'react';
//import { Link } from 'react-router-dom';

const LoginForm = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                </div>
                <button type="submit" className="btn btn-primary mr-2">Login</button>
                {/* <Link to="/signup" className="btn btn-secondary">Sign Up</Link> */}
            </form>
        </div>
    );
};

export default LoginForm;
