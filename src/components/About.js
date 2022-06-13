import React from "react";

import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-right'>
                <div>
                    <span className='code-font-h'>&lt;img&gt;</span>
                    <img src="images/img_me.png" alt='portrait'/>
                    <span className='code-font-h'>&lt;/img&gt;</span>
                </div>
            </div>
            <div className='about-left'>
                <h1><span className='code-font-h'>&lt;h1&gt;</span>About me<span className='code-font-h'>&lt;/h1&gt;</span></h1>
                <span className='code-font-p'>&lt;p&gt;</span>
                <p>I can confidently say, that coding is my passion and brings me a lot of joy. There are no problems I can't overcome and use as a great opportunity to learn. I'm looking for work, which will challenge me and I'm ready to deliver software solutions.</p>
                <span className='code-font-p'>&lt;/p&gt;</span><br />
                <span className='code-font-p'>&lt;p&gt;</span>
                <p>I am a graduate of Liverpool Hope University with a bachelor's degree in Computer Science. I can code websites using HTML, CSS, Javascript, and React framework. I can also code in Python and I am familiar with many Python libraries, such as Requests, BeautifulSoup, Selenium, PyTorch.</p>
                <span className='code-font-p'>&lt;/p&gt;</span><br />
                <span className='code-font-p'>&lt;p&gt;</span>
                <p>I am looking for opportunities to work as a Junior Developer. I am open to learning new technologies, new programming languages. Please use a contact form to get  in touch with me.</p>
                <span className='code-font-p'>&lt;/p&gt;</span>
            </div>
        </div>
    );
}

export default About;