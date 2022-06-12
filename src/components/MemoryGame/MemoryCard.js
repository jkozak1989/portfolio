import React from 'react';

import './MemoryCard.css';

const MemoryCard = (props) => {

    let cardStyle = {}
    if (!props.active) {
        cardStyle = {'transform': 'rotateY(0deg)', 'backgroundColor': 'transparent', 'opacity': '0'};
    } else if (props.revealed) {
        cardStyle = {'transform': 'rotateY(0deg)', 'backgroundColor': 'transparent'};
    } else {
        cardStyle = {'transform': 'rotateY(180deg)', 'backgroundColor': 'var(--secondary)'};
    }

    function handleClick() {
        if (!props.revealed && props.active) {
            props.onReveal(props.id);
        }
    }

    return (
        <div 
            className='memory-card' 
            style={cardStyle} 
            onClick={handleClick}
        >
            <i className={props.icon} />
        </div>
    )
}

export default MemoryCard;