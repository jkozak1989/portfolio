import React from "react";
import { Link } from "react-router-dom";

import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            name: 'Pixel Art Maker',
            description: 'This project allows user to create a 32x32 pixel image. Implemented with React.',
            skills: 'HTML, CSS, Javascript, React',
            link: 'pixel_art_maker',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/PixelArtMaker'
        },
        {
            name: 'Wheelspin',
            description: 'This project implements a reward wheel as seen in many competitions.',
            skills: 'HTML, CSS, Javascript, React',
            link: 'wheelspin',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/Wheelspin'
        },
        {
            name: 'Memory Game',
            description: 'This project implements a fully playable Memory Game. Created with React.',
            skills: 'HTML, CSS, Javascript, React',
            link: 'memory_game',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/MemoryGame'
        },
        {
            name: 'Crypto Price Widget',
            description: 'This project connects to coingecko API to get the list of all crypto currencies and checks for their price in USD.',
            skills: 'HTML, CSS, Javascript, React',
            link: 'crypto_price_widget',
            github: 'https://github.com/jkozak1989/portfolio/tree/master/src/components/CryptoPriceWidget'
        },
        {
            name: 'Colorblind Helper',
            description: 'Project uses decision tree algorithm to recognise colors in the picture and upon clicking prints them to the console.',
            skills: 'Python, Machine Learning',
            link: '',
            github: 'https://github.com/jkozak1989/python/tree/main/colorblindHelper'
        },
        {
            name: 'Ant Colony Optimization',
            description: 'Implementation of Ant Colony Optimization algorithm, which solves travellisng salesman problem.',
            skills: 'Python',
            link: '',
            github: 'https://github.com/jkozak1989/python/tree/main/antColonyOptimization'
        },
        {
            name: 'Card Buying Bot Splinterlands',
            description: 'Bot connects to hive blockchain to check every new block and whenever it finds a card with a correct price, it attempts to buy the card.',
            skills: 'Python, API, Hive Blockchain',
            link: '',
            github: 'https://github.com/jkozak1989/python/tree/main/cardBuyingBot'
        },
        {
            name: 'Dot Art Converter',
            description: 'Script converts pixel art image into dot art by changing every pixel into a circle.',
            skills: 'Python',
            link: '',
            github: 'https://github.com/jkozak1989/python/tree/main/dotArt'
        }
    ]
    return (
        <div className='portfolio'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>My projects<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            {projects.map(project => {
                return (
                    <div key={project.name} className='project'>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p style={{'color':'var(--primary)'}}>Skills: {project.skills}</p>
                        <div>
                            {project.link && <Link to={project.link}>See project</Link>}<br/>
                            <a href={project.github}>See source code</a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Portfolio;