import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Splash from './components/splash';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import AppDashboard from './components/dashboard';
import GetWeather from './components/WeatherApp/WeatherDisplay';
import './components/WeatherApp/WeatherApp.css'


function App() {
  return (
    <div>
      {/* //<Splash />
    //<LoginForm />
    //<SignupForm /> */}
      <AppDashboard />

      <div id='weatherApp'>
        <GetWeather />
      </div>
    </div>
  );
}

export default App;
