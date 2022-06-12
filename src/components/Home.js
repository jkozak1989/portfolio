import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-left'>
                <div>
                    <span className='code-font-h'>&lt;h1&gt;</span>
                    <h1>Hi! I'm Jarek, and I'm a developer.</h1>
                    <span className='code-font-h'>&lt;/h1&gt;</span>
                </div>
            </div>
            <div className='home-right'>
                <div>
                    <img src='images/HTML5_logo.svg' className="home-skill" />
                    <img src='images/CSS3_logo.svg' className="home-skill" />
                    <img src='images/Javascript_logo.png' className="home-skill" />
                    <img src='images/React_logo.png' className="home-skill" />
                    <img src='images/Python_logo.svg' className="home-skill" />
                </div>
            </div>
            <div className='home-bottom'>
                <h2><span className='code-font-h'>&lt;h2&gt;</span>I have experience coding with HTML, CSS, JavaScript, React, and Python.<span className='code-font-h'>&lt;/h2&gt;</span></h2>
                <div>
                    <span className='code-font-h'>&lt;button&gt;</span><Link to="portfolio" className='home-btn'>See my work</Link><span className='code-font-h'>&lt;/button&gt;</span>
                </div>
            </div>
        </div>
    );
}

export default Home;