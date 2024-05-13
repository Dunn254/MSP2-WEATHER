import React, { useState, useEffect } from 'react';

function GetStocksAggregate() {
    const [ticker, setTicker] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState(null);
    const [stockData, setStockData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchTickerData() {
            setIsFetching(true);
            const API_KEY_2 = process.env.REACT_APP_STOCK_API_KEY;
            const stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${startDate}/${endDate}?adjusted=true&sort=asc&apiKey=${API_KEY_2}`; // Fixed interpolation
    
            try {
                const response = await fetch(stockUrl);
                const data = await response.json();
                setStockData(data.results); // Update to set only the results array
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
    }, [ticker, startDate, endDate, isFetching]); // Added startDate and endDate to the dependency array
    

    const handleFetchTickerData = () => {
        setIsFetching(true);
        console.log('Fetching stock data...');
    };

    return (
        <div className='container'>
            <h2>Stock Price Trending History:</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={ticker}
                    type='text'
                    placeholder='Enter a ticker symbol'
                    onChange={(event) => setTicker(event.target.value)} // Corrected line
                />
                <input
                    value={startDate}
                    type='date'
                    placeholder='Enter a start date'
                    onChange={(event) => setStartDate(event.target.value)} // Corrected line
                />
                <input
                    value={endDate}
                    type='date'
                    placeholder='Enter an end date'
                    onChange={(event) => setEndDate(event.target.value)} // Corrected line
                />
                <button type='submit' onClick={handleFetchTickerData} disabled={!ticker.trim()}>
                        {isFetching ? 'Fetching...' : 'Get Stock Price History'}
                </button>
            </form>
            <div className='tickerData'>
                {stockData && stockData.map((stock, index) => (
                    <div key={index}>
                        <p>Date: {new Date(stock.t).toLocaleDateString()}</p>
                        <p>Closing Price: {stock.c}</p>
                    </div>
                ))}
                {error && <p>Error fetching data: {error.message}</p>}
            </div>
        </div>
    );
}

export default GetStocksAggregate;
