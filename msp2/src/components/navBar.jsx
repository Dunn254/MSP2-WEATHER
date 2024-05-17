import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import GetWeather from './WeatherApp/WeatherDisplay';
import '../App.css'

export default function NavBar() {
    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}