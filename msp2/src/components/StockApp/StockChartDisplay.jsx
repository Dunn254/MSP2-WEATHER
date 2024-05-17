import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function GetStocksAggregate() {
    const [ticker, setTicker] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState(null);
    const [stockData, setStockData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        async function fetchTickerData() {
            setIsFetching(true);
            const API_KEY_2 = process.env.REACT_APP_STOCK_API_KEY;
            const stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${startDate}/${endDate}?adjusted=true&sort=asc&apiKey=${API_KEY_2}`; // Fixed interpolation
    
            try {
                const response = await fetch(stockUrl);
                const data = await response.json();
                if (data.results) {
                    setStockData(data.results);
                    const chartData = {
                        labels: data.results.map(stock => new Date(stock.t).toLocaleDateString()),
                        datasets: [
                            {
                                label: 'Closing Price',
                                data: data.results.map(stock => stock.c),
                                fill: false,
                                borderColor: 'rgb(25, 43, 43)',
                                backgroundColor: 'rgba(25, 43, 43, 0.5)', // Darker color with transparency
                                tension: 0.1
                            }
                        ]
                    };
                    setChartData(chartData);
                } else {
                    setError("No data found");
                }
            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setIsFetching(false);
            }
        }
    
        if (ticker.trim() !== '' && isFetching) {
            fetchTickerData();
        }
    }, [ticker, startDate, endDate, isFetching]);

    const handleFetchTickerData = () => {
        setIsFetching(true);
        console.log('Fetching stock data...');
    };

    const options = {
        scales: {
            x: {
                ticks: { color: 'rgb(25, 43, 43)' }, // Darker tick color
                grid: { color: 'rgb(25, 43, 43)' } // Darker grid color
            },
            y: {
                ticks: { color: 'rgb(25, 43, 43)' }, // Darker tick color
                grid: { color: 'rgb(25, 43, 43)' } // Darker grid color
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgb(25, 43, 43)' // Darker legend color
                }
            }
        }
    };

    return (
        <div className='container'>
            <h1>Get Stock Price History:</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={ticker}
                    type='text'
                    placeholder='Enter a ticker symbol'
                    onChange={(event) => setTicker(event.target.value)}
                />
                <input
                    value={startDate}
                    type='date'
                    onChange={(event) => setStartDate(event.target.value)}
                />
                <input
                    value={endDate}
                    type='date'
                    onChange={(event) => setEndDate(event.target.value)}
                />
                <button type='submit' onClick={handleFetchTickerData} disabled={!ticker.trim()}>
                        {isFetching ? 'Fetching...' : 'Click Here!'}
                </button>
            </form>
            {chartData && (
                <div className='chart-container'>
                    <Line data={chartData} options={options} />
                </div>
            )}
        </div>
    );
}

export default GetStocksAggregate;
