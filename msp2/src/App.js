import React from 'react'
import './App.css';
<<<<<<< HEAD
import Navbar from './Navbar';
=======
import Splash from './components/splash';
import LoginForm from './components/login';
>>>>>>> 1a01a21 (created widgets component)
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
<<<<<<< HEAD
    <div className="h-screen w-screen" style={style}>
      <Navbar />
      <Component />
=======

    <div>
      {/* //<Splash />
=======
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

      {/* <div id='weatherApp'>
        <GetWeather />
      </div> */}
      <div className="app">
      <NewsList />
>>>>>>> 1a01a21 (created widgets component)
    </div>
  );


}

export default App;


