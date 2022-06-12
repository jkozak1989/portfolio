import React from "react";

import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <h1><span className='code-font-h'>&lt;h1&gt;</span>About me<span className='code-font-h'>&lt;/h1&gt;</span></h1>
                <span className='code-font-p'>&lt;p&gt;</span>
                <p>First of all, I really like coding. Even when I'm stuck, I always find a way to solve my coding problems. I'm looking for work, which will allow me to continue learning and delivering software solutions.</p>
                <span className='code-font-p'>&lt;/p&gt;</span><br />
                <span className='code-font-p'>&lt;p&gt;</span>
                <p>This summer I will be a graduate of Liverpool Hope University with a bachelor's degree in Computer Science. I can code websites using HTML, CSS, Javascript, and React frameowork. I can also code in Python and I am familiar with many Python libraries, such as Requests, BeautifulSoup, Selenium, PyTorch.</p>
                <span className='code-font-p'>&lt;/p&gt;</span><br />
                <span className='code-font-p'>&lt;p&gt;</span>
                <p>I am looking for opportunities to work as a Junior Developer. I am open to learning new technologies, new programming languages. If you want to get in touch, please use a contact form.</p>
                <span className='code-font-p'>&lt;/p&gt;</span>
            </div>
            <div className='about-right'>
                <div>
                    <span className='code-font-h'>&lt;img&gt;</span>
                    <img src="images/img_me.png" />
                    <span className='code-font-h'>&lt;/img&gt;</span>
                </div>
            </div>
        </div>
    );
}

export default About;