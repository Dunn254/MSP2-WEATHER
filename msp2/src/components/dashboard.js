import React from 'react';
import GetWeather from './WeatherApp/WeatherDisplay';
import GetStocks from './StockApp/StockDisplay';
import GetCurrency from './StockApp/ExchangeDisplay';
import GetStocksAggregate from './StockApp/StockChartDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppDashboard() {
    return (
        <div className="container-fluid">
            <div className="row border mb-3">
                <div className="col">
                    <GetWeather />
                </div>
            </div>
            <div className="row border mb-3">
                <div className="col-md mb-2">
                    <GetStocks />
                </div>
                <div className="col-md mb-2">
                    <GetCurrency />
                </div>
            </div>
            <div className="row border mb-3">
                <div className="col">
                    <GetStocksAggregate />
                </div>
            </div>
        </div>
    );
}

export default AppDashboard;
