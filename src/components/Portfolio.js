import React from "react";
import { Link } from "react-router-dom";

import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>My projects<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            <Link to='pixel_art_maker'>pixel</Link><br/>
            <Link to='wheelspin'>wheelspin</Link><br/>
            <Link to='memory_game'>Memory Game</Link><br/>
            <Link to='crypto_price_widget'>Crypto Price Widget</Link>
        </div>
    );
}

export default Portfolio;