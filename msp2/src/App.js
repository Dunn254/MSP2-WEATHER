import React from 'react'
import './App.css';
import Navbar from './Navbar';
import SignupForm from './components/signup';
import AppDashboard from './components/dashboard';
import GetWeather from './components/WeatherApp/WeatherDisplay';
import GetStocks from './components/StockApp/StockDisplay';
import GetCurrency from './components/StockApp/ExchangeDisplay';
import GetStocksAggregate from './components/StockApp/StockChartDisplay';
import background from './images/pexels-dreamypixel-547114.jpg';
import NewsList from './components/NewsList';
import LoginForm from './components/login';

function App() {

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = AppDashboard;
      break;
    case "/Signup":
      Component = SignupForm;
      break;
    case "/Weather":
      Component = GetWeather;
      break;
    case "/News":
      Component = NewsList;
      break;
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
    <div className="h-screen w-screen" style={style}>
      <Navbar />
      <Component />
    </div>
  );


}

export default App;


