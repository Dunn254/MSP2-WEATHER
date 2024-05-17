import React,{ useState, useEffect } from 'react'
import './WeatherApp.css'
import Sun from './Assets/sunny_icon.png'
import { FaSearch } from 'react-icons/fa'

function WeatherDisplay() {

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
             const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
             // Fetch weather data
             try {
                 const response = await fetch(weatherUrl, options)
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
    <div id='weatherApp'>
        <div>
            <h3>Check the Weather:</h3>
            <div className='searchBarContainer'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='searchBarWrap'>
                        <button className='searchBarBtn' type='submit' onClick={handleFetchWeather} disabled={!location.trim()}>
                            {isFetching ? 'Fetching...' : <FaSearch id='searchIcon' />}
                        </button>
                        <input
                            value={location}
                            type='text'
                            placeholder='Enter location'
                            onChange={(event) => setLocation(event.target.value)} />
                    </div>
                </form>
            </div>
            <div className='weatherData'>
                {weatherData && (
                    <div>
                        <div className='icon'>
                        <p>Location: {weatherData.location.name}</p>
                        <img src={Sun} alt='sunny' />
                        </div>
                        <p>Condition: {weatherData.current.condition.text}</p>
                        <p>Temperature: {weatherData.current.temp_f}°F</p>
                        <p>Feels like: {weatherData.current.feelslike_f}°F</p>
                        <p>Humidity: {weatherData.current.humidity}</p>
                        <p>Wind mph: {weatherData.current.wind_mph} mph</p>
                    </div>
                )}
                {error && <p>Error fetching data {error.message}</p>}
            </div>
        </div>

    </div>
  )
}

export default WeatherDisplay





// import './WeatherApp.css'
// import React, { useState, useEffect } from 'react'



// function GetWeather() {
   
//     return (

//             <div className='container'>
//                 <h2>Weather Data:</h2>
//                 <form onSubmit={(e) => e.preventDefault()}>
//                     <input
//                         value={location}
//                         type='text'
//                         placeholder='Enter a location'
//                         onChange={(event) => setLocation(event.target.value)} />
//                     <button type='submit' onClick={handleFetchWeather} disabled={!location.trim()}>
//                         {isFetching ? 'Fetching...' : 'Get weather'}
//                     </button>
//                 </form>
//                 {/* <div className='weatherData'>
//                 {weatherData && (
//                         <pre>{JSON.stringify(weatherData)}</pre>
//                 )}
//                 {error && <p>Error fetching data {error.message}</p>}
//                 </div> */}
//                 <div className='weatherData'>
//                 {weatherData && (
//                         <div>
//                             <p>Location: {weatherData.location.name}</p>
//                             <p>Temperature: {weatherData.current.temp_c}°C</p>
//                             <p>Humidity: {weatherData.current.humidity}</p>
//                             <p>Condition: {weatherData.current.condition.text}</p>
//                             </div>
//                 )}
//                 {error && <p>Error fetching data {error.message}</p>}
//                 </div>
//             </div>
//     )

// }

// export default GetWeather;

//     )

// }

// export default GetWeather

