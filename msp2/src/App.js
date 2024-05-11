import React from 'react'
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import AppDashboard from './components/dashboard';
import GetWeather from './components/WeatherApp/WeatherDisplay';


function App() {
  return (
    <div>
    <SignupForm />
    {/* //<Splash />
    //<LoginForm />
      //<AppDashboard />
        //<GetWeather /> */}
      </div>
  );
}

export default App;
