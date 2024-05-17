import React, { useState, useEffect} from "react";

function GetCurrency() {
    const [ currency1, setCurrency1 ] = useState('');
    const [ currency2, setCurrency2 ] = useState('');
    const [ error, setError ] = useState(null);
    const [ stockData, setStockData ] = useState(null);
    const [ isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        async function fetchCurrencyData() {
            setIsFetching(true);
            const API_KEY_1 = process.env.REACT_APP_CURRENCY_API_KEY;
            const exchangeUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency1}&to_currency=${currency2}&apikey=${API_KEY_1}`;

            try {
                const response = await fetch(exchangeUrl); // Fixed variable name
                const data = await response.json();
                setStockData(data);
            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setIsFetching(false);
            }
        }

        if (currency1.trim() !== '' && currency2.trim() !== '' && isFetching) { // Changed variable names
            fetchCurrencyData();
        }
    }, [currency1, currency2, isFetching]); // Added currency1 and currency2 to the dependency array

    const handleFetchCurrencyData = () => {
        setIsFetching(true);
        console.log('Fetching Exchange Rate...');
    };

    return (
        <div className='container'>
            <h1>Get Exchange rates:</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={currency1}
                    type='text'
                    placeholder='e.g. USD'
                    onChange={(event) => setCurrency1(event.target.value)} // Fixed event handler
                />
                <input
                    value={currency2}
                    type='text'
                    placeholder='e.g. GBP or BTC'
                    onChange={(event) => setCurrency2(event.target.value)} // Fixed event handler
                />
                <button type='submit' onClick={handleFetchCurrencyData} disabled={!currency1.trim() || !currency2.trim()}> {/* Changed variable names */}
                    {isFetching ? 'Fetching...' : 'Click Here!'}
                </button>
            </form>
            <div className='ExchangeRateData'>
                {stockData && (
                    <div>
                        <p>From: {stockData['Realtime Currency Exchange Rate'] && stockData['Realtime Currency Exchange Rate']['2. From_Currency Name']} </p>
                        <p>To: {stockData['Realtime Currency Exchange Rate'] && stockData['Realtime Currency Exchange Rate']['4. To_Currency Name']}</p>
                        <p>Current Exchange Rate: {stockData['Realtime Currency Exchange Rate'] && stockData['Realtime Currency Exchange Rate']['5. Exchange Rate']}</p> {/* Updated access to stockData */}
                    </div>
                )}
                {error && <p>Error fetching data: {error.message}</p>}
            </div>
        </div>
    );
}

export default GetCurrency;
