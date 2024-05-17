import React, { useState, useEffect } from 'react';

function GetStocks() {
    const [ticker, setTicker] = useState('');
    const [error, setError] = useState(null);
    const [stockData, setStockData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchTickerData() {
            setIsFetching(true);
            const API_KEY_2 = process.env.REACT_APP_STOCK_API_KEY;
            const stockUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${API_KEY_2}`;

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
    }, [ticker, isFetching]);

    const handleFetchTickerData = () => {
        setIsFetching(true);
        console.log('Fetching stock data...');
    };

    return (
        <div className='container'>
            <h1>Get Stock Closing Price:</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={ticker}
                    type='text'
                    placeholder='Enter a ticker symbol'
                    onChange={(event) => setTicker(event.target.value)}
                />
                <button type='submit' onClick={handleFetchTickerData} disabled={!ticker.trim()}>
                    {isFetching ? 'Fetching...' : 'Click Here!'}
                </button>
            </form>
            <div className='tickerData'>
                {stockData && stockData.map((stock, index) => (
                    <div key={index}>
                        <p>Ticker: {stock.T}</p>
                        <p>Close: {stock.c}</p>
                    </div>
                ))}
                {error && <p>Error fetching data: {error.message}</p>}
            </div>
        </div>
    );
}

export default GetStocks;
