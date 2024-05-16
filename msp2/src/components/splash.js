import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg'; // Ensure you have the correct path to your logo

function Splash() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login');
    };

    return (
        <div className="App container-fluid bg-dark">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome!!</h1>
                <p>WTForecast?!!</p>
                <button className="App-link btn-primary border text-light" onClick={handleGetStartedClick}>
                    Get Started
                </button>
            </header>
        </div>
    );
}

export default Splash;
