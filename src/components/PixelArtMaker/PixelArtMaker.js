import React, { useState } from 'react';
import Pixel from './Pixel'

import './PixelArtMaker.css';

const PixelArtMaker = () => {

    let pixelArray = [...Array(1024).keys()]
    let counter = 0;
    let colors =['#d3d3d3', '#fff']
    pixelArray = pixelArray.map(item => {
        if (counter === 32) {
            colors = colors.reverse();
            counter = 0;
        }
        counter = counter + 1;
        return {
            pixelId: item,
            color: item % 2 === 0 ? colors[0] : colors[1]
        }
    });

    const [pixelMap, setPixelMap] = useState([...pixelArray]);
    const [chosenColor, setChosenColor] = useState('#000000');
    const [drawActive, setDrawActive] = useState(false);

    function handleMouseDown(event) {
        setDrawActive(true);
    }

    function handleMouseUp(event) {
        setDrawActive(false)
    }


    function handlePixelColor(key) {
        if (drawActive === true) {
            setPixelMap(prevPixelMap => {
                let newPixelMap = [...prevPixelMap];
                newPixelMap[key] = {
                    ...newPixelMap[key],
                    color: chosenColor
                }
                return newPixelMap
            })
        }
    }

    function handleColorChange(event) {
        setChosenColor(() => event.target.value);

    }

    function handleClear() {
        setPixelMap(() => {
            return [...pixelArray];
        })
    }

    function handleDownload() {

    }

    return (
        <div className='pixelartmaker'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>Pixel Art Maker<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            <div className='pixelmap' onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
                {pixelMap.map(item => {
                    return (
                        <Pixel key={item.pixelId} color={item.color} pixelId={item.pixelId} onColorChange={handlePixelColor} />
                    )
                })}
            </div>
            <div className='pixelart-menu'>
                <div className='pixelart-menu-color'>
                    <p>Click to choose color:</p>
                    <input 
                        type='color' 
                        className='pixelart-colorpicker' 
                        name='color-picker' 
                        onChange={handleColorChange}
                    />
                </div>
                <button className='pixelart-button' onClick={handleClear}>Clear Image</button>
            </div>
        </div>
    )
}

export default PixelArtMaker;