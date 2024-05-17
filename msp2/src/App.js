import SignupForm from './components/signup';
import React from 'react'
import './App.css';
import AppDashboard from './components/dashboard';
import GetWeather from './components/WeatherApp/WeatherDisplay';
import GetStocks from './components/StockApp/StockDisplay';
import GetCurrency from './components/StockApp/ExchangeDisplay';
import Navbar from './Navbar';
import './NavBar.css'
import GetStocksAggregate from './components/StockApp/StockChartDisplay';
import './components/WeatherApp/WeatherApp.css'


import NewsList from './components/NewsList'

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = AppDashboard;
      break;
    case "/Weather":
      Component = GetWeather;
      break;
    // case "/News":
    //   Component = News;
    //   break;
    //test
    case "/Stocks":
      Component = () => (
        <React.Fragment>
          <GetStocks />
          <GetStocksAggregate />
        </React.Fragment>
      );
      break;
    case "/Exchange":
      Component = GetCurrency;
      break;
    default:
      Component = AppDashboard; // Default component to render
  }

  return (
 <div>

    <div>
    <SignupForm />
    {/* //<Splash />
      //<AppDashboard />
        //<GetWeather /> */}
      

 
      <Navbar />
      <Component />
    {/* //<Splash />
    //<LoginForm />
    //<SignupForm /> */}
      <AppDashboard />
      <div id='weatherApp'>
        <GetWeather />
      </div>
      <div className="app">
      <NewsList />
    </div>
    </div>
</div>
  );
    
  
}

export default App;


