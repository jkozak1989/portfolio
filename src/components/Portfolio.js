import React from "react";
import { Link } from "react-router-dom";

import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            name: 'Pixel Art Maker',
            description: 'This project allows user to create a 32x32 pixel image. Implemented with React.',
            link: 'pixel_art_maker',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/PixelArtMaker'
        },
        {
            name: 'Wheelspin',
            description: 'This project implements a reward wheel as seen in many competitions.',
            link: 'wheelspin',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/Wheelspin'
        },
        {
            name: 'Memory Game',
            description: 'This project implements a fully playable Memory Game. Created with React.',
            link: 'memory_game',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/MemoryGame'
        },
        {
            name: 'Crypto Price Widget',
            description: 'This project connects to coingecko API to get the list of all crypto currencies and checks for their price in USD.',
            link: 'crypto_price_widget',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/CryptoPriceWidget'
        }
    ]
    return (
        <div className='portfolio'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>My projects<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            {projects.map(project => {
                return (
                    <div className='project'>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div>
                            <Link to={project.link}>See project</Link><br/>
                            <a href={project.github}>See source code</a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Portfolio;