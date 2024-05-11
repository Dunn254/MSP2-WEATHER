import React, { useState, useEffect } from 'react'
import './WeatherApp.css'

function GetWeather() {
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
            <div className='container'>
                <h2>Weather Data:</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        value={location}
                        type='text'
                        placeholder='Enter a location'
                        onChange={(event) => setLocation(event.target.value)} />
                    <button type='submit' onClick={handleFetchWeather} disabled={!location.trim()}>
                        {isFetching ? 'Fetching...' : 'Get weather'}
                    </button>
                </form>
                {/* <div className='weatherData'>
                {weatherData && (
                        <pre>{JSON.stringify(weatherData)}</pre>
                )}
                {error && <p>Error fetching data {error.message}</p>}
                </div> */}
                <div className='weatherData'>
                {weatherData && (
                        <div>
                            <p>Location: {weatherData.location.name}</p>
                            <p>Temperature: {weatherData.current.temp_c}°C</p>
                            <p>Humidity: {weatherData.current.humidity}</p>
                            <p>Condition: {weatherData.current.condition.text}</p>
                            </div>
                )}
                {error && <p>Error fetching data {error.message}</p>}
                </div>
            </div>
    )

}

export default GetWeather;