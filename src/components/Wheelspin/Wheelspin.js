import React, { useState } from 'react';

import './Wheelspin.css';

const Wheelspin = () => {

    let rewards = ['1500', '100', '2000', '500', '1', '999', '300', '1000000']
    rewards = rewards.map(item => {
        return `${item} virtual dollars`
    });

    let wheelspinMiddle = (window.innerWidth-600)/2
    let spinActive = true;

    function handleSpin() {
        if (spinActive) {
            const wheel = document.querySelector('.wheelspin-wheel');
            const banner = document.querySelector('.wheelspin-win-banner');
            const reset = document.querySelector('.wheelspin-reset');
            let spin = 337.5;
            let choice = Math.floor(Math.random() * 8 + 1);
            spin = spin + choice * 45;
            wheel.style.cssText += `transform:rotate(-${spin}deg)`;
            banner.style.cssText += 'opacity:1';
            reset.style.cssText += 'opacity:1';
            banner.innerHTML = `Congrats, you won ${rewards[choice-1]}!`;
            spinActive = false;
        }
    }

    function handleReset() {
        const wheel = document.querySelector('.wheelspin-wheel');
        const banner = document.querySelector('.wheelspin-win-banner');
        const reset = document.querySelector('.wheelspin-reset');
        wheel.style.cssText += `transform:rotate(0deg)`;
        banner.style.cssText += 'opacity:0';
        reset.style.cssText += 'opacity:0';
        spinActive = true;
    }

    return (
        <div className='wheelspin' style={{'left': wheelspinMiddle}}>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>Wheelspin<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            <div className='wheelspin-wheel'>
                <div className='wheelspin-option-1'></div>
                <div className='wheelspin-option-2'></div>
                <div className='wheelspin-option-3'></div>
                <div className='wheelspin-option-4'></div>
                <div className='wheelspin-option-5'></div>
                <div className='wheelspin-option-6'></div>
                <div className='wheelspin-option-7'></div>
                <div className='wheelspin-option-8'></div>
                <div className='wheelspin-win-1'>{rewards[0]}</div>
                <div className='wheelspin-win-2'>{rewards[1]}</div>
                <div className='wheelspin-win-3'>{rewards[2]}</div>
                <div className='wheelspin-win-4'>{rewards[3]}</div>
                <div className='wheelspin-win-5'>{rewards[4]}</div>
                <div className='wheelspin-win-6'>{rewards[5]}</div>
                <div className='wheelspin-win-7'>{rewards[6]}</div>
                <div className='wheelspin-win-8'>{rewards[7]}</div>
                <div className='wheelspin-bar-1'></div>
                <div className='wheelspin-bar-2'></div>
                <div className='wheelspin-bar-3'></div>
                <div className='wheelspin-bar-4'></div>
                <button className='wheelspin-button' onClick={handleSpin}><span className='code-font-h'>Spin!</span></button>
            </div>
            <div className='wheelspin-pointer'></div>
            <div className='wheelspin-win-banner'></div>
            <button className='wheelspin-reset' onClick={handleReset}>Play again</button>
        </div>
    )
}

export default Wheelspin;