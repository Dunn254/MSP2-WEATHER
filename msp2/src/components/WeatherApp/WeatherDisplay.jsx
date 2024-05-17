import React, { useState, useEffect } from 'react'
import './WeatherApp.css'
import Sun from './Assets/sunny_icon.png'
import clearSky from './Assets/clearSky.jpg'
import clearSkyGif from './Assets/clearSky.gif'
import Horizon from './Assets/horizon.jpg'
import { FaSearch } from 'react-icons/fa'
import Widgets from './Widgets'

const WeatherDisplay = () => {

    // Create state to store weather data
    const [weatherData, setWeatherData] = useState(null)
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null)
    // Create a state to track whether data is being fetched or not
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {

        async function fetchWeatherData() {

            // API request options
            const options = { method: 'GET', headers: { accept: 'application/json' } }

            // create fetch url with API key
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
            const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
            // Fetch weather data
            try {
                const response = await fetch(url, options)
                const data = await response.json()
                setWeatherData(data)
                console.log(data)
            } catch (err) {
                setError(err)
                console.log(err)
            } finally {
                setIsFetching(false)
            }
        }

        // Fetch weather data only if location is not empty
        if (location.trim() !== '' && isFetching) {
            fetchWeatherData()
        } else {
            // setWeatherData(null)
            return
        }
    }, [location, isFetching])

    const handleFetchWeather = () => {
        setIsFetching(true)
        setWeatherData(weatherData)
        console.log(weatherData)
        console.log('Successfully grabbed weather data for a city ✅')
    }

    return (
        <div className='weatherApp' style={{ backgroundImage: `url(${clearSky})` }}>
            <div className='container'>
                <h3>Check the weather:</h3>
                <div className='searchBarContainer'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='searchBar'>
                            <button className='searchBarBtn' type='submit' onClick={handleFetchWeather} disabled={!location.trim()}>
                                {isFetching ? 'Loading...' : <FaSearch id='searchIcon' />}
                            </button>
                            <input
                                value={location}
                                type='text'
                                placeholder='Enter city'
                                onChange={(event) => setLocation(event.target.value)} />
                        </div>
                    </form>
                </div>
                <div className='weatherData'>
                    {weatherData && (
                        <div>
                        <div className='weatherDataDisplay'>
                            <div className='icon'>
                                <h5>{weatherData.location.name}, {weatherData.location.region}</h5>
                                <img src={Sun} alt='sunny' />
                                <h5>{weatherData.current.condition.text}</h5>
                            </div>
                            <div className='temperature'>
                                <h3>{weatherData.current.temp_f}°F</h3>
                            </div>
                            {/* <p>Feels like: {weatherData.current.feelslike_f}°F</p>
                            <p>Humidity: {weatherData.current.humidity}</p>
                            <p>Wind mph: {weatherData.current.wind_mph} mph</p> */}
                        </div>
                        </div>
                    )}
                    {error && <p>Error fetching data {error.message}</p>}
                </div>
                {/* <Widgets /> */}
            </div>
            {/* Pass fetched data into Widgets */}
            {weatherData && (
            <Widgets 
            humidity={ weatherData.current.humidity }
            wind_mph={ weatherData.current.wind_mph } />
            )}
        </div>
    )
}

export default WeatherDisplay

