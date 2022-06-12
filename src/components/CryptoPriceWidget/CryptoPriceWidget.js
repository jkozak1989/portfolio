import React, { useEffect, useState } from 'react';

import './CryptoPriceWidget.css';

const CryptoPriceWidget = () => {

    const [apiData, setApiData] = useState([]);
    const [activeToken, setActiveToken] = useState('bitcoin');
    const [activeTokenPrice, setActiveTokenPrice] = useState(0)

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(data => setApiData(() => data));
    }, [activeToken]);

    function handleTokenChange(event) {
        setActiveToken(() => event.target.value);
    };

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${activeToken}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => setActiveTokenPrice(() => data[activeToken]['usd']));
    }, [activeToken]);

    const loadingScreen = (<p>Loading token list...</p>);

    const appScreen = (
        <>
            <form className='crypto-widget-form'>
                <label>Choose a token to check the USD price:</label>
                <select className='crypto-widget-select' value={activeToken} onChange={handleTokenChange}>
                    {apiData.map(token => {
                        return (
                            <option key={token.id} value={token.id}>{token.name} - {token.symbol.toUpperCase()}</option>
                        )
                    })}
                </select>
            </form>
            <p>Price per 1 token is <span>${activeTokenPrice}</span></p>
        </>
    );

    return (
        <div className='crypto-widget'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>Crypto Price Widget<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            {activeTokenPrice === 0 ? loadingScreen : appScreen}
        </div>
    )
};

export default CryptoPriceWidget;