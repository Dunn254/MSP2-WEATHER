import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupForm from './components/signup';
import LoginForm from './components/login';
import AppDashboard from './components/dashboard';
import Navbar from './Navbar';
import Splash from './components/splash';
import './App.css';
import './NavBar.css';
import './components/WeatherApp/WeatherApp.css';

function App() {
    const [currentView, setCurrentView] = useState('splash');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Show splash screen for 10 seconds
        const timer = setTimeout(() => {
            setCurrentView('login');
        }, 10000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loggedIn) {
            setCurrentView('dashboard');
        }
    }, [loggedIn]);

    return (
        <Router>
            {currentView === 'splash' && <Splash />}
            {currentView !== 'splash' && (
                <>
                    {currentView === 'dashboard' && <Navbar />}
                    <Routes>
                        <Route path="/" element={loggedIn ? <AppDashboard /> : <Navigate to="/login" />} />
                        <Route path="/login" element={<LoginForm setLoggedIn={setLoggedIn} />} />
                        <Route path="/signup" element={<SignupForm />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </>
            )}
        </Router>
    );
}

export default App;
