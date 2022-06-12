import React, { useState } from "react";

import './Pixel.css';

const Pixel = (props) => {

    function handleMouseAction() {
            props.onColorChange(props.pixelId);
    }
    return (
        <div className='pixel' style={{'backgroundColor': props.color}} onMouseOver={handleMouseAction} onMouseUp={handleMouseAction}></div>
    )
}

export default Pixel;