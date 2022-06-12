import React, { useEffect, useRef, useState } from 'react';
import MemoryCard from './MemoryCard';

import './MemoryGame.css';

const MemoryGame = () => {

    let icons = ['bi bi-apple', 'bi bi-discord', 'bi bi-github', 'bi bi-playstation', 
                'bi bi-xbox', 'bi bi-windows', 'bi bi-steam', 'bi bi-stack-overflow',
                'bi bi-twitch', 'bi bi-reddit', 'bi bi-linkedin', 'bi bi-nintendo-switch',
                'bi bi-paypal', 'bi bi-google', 'bi bi-youtube', 'bi bi-meta'];
    icons = [...icons, ...icons];
    
    let cards = [...Array(32).keys()];
    cards = cards.map(item => {
        return {
            id: item,
            icon: icons[item],
            revealed: false,
            active: true,
        }
    });

    function shuffleCards() {
        cards.sort(function(a, b){return 0.5 - Math.random()});
    };

    shuffleCards();

    const [memoryCards, setMemoryCards] = useState([...cards]);
    const clickCounter = useRef(0);

    function handleReveal(id) {
        setMemoryCards(prevCards => {
            clickCounter.current = clickCounter.current + 1;
            let newCards = [...prevCards];
            let index = newCards.findIndex(card => card.id === id);
            newCards[index].revealed = !newCards[index].revealed;
            return newCards
        })
    }

    useEffect(() => {
        let revealedCards = memoryCards.filter(card => {
            if (card.revealed === true) {
                return card
            }
        });
        setTimeout(() => {
            if (revealedCards.length === 2 && revealedCards[0].icon !== revealedCards[1].icon) {
                let first = memoryCards.findIndex(card => card.id === revealedCards[0].id);
                let second = memoryCards.findIndex(card => card.id === revealedCards[1].id);
                setMemoryCards(prevCards => {
                    let newCards = [...prevCards];
                    newCards[first].revealed = false;
                    newCards[second].revealed = false;
                    return newCards
                })
            } else if (revealedCards.length === 2 && revealedCards[0].icon === revealedCards[1].icon) {
                let first = memoryCards.findIndex(card => card.id === revealedCards[0].id);
                let second = memoryCards.findIndex(card => card.id === revealedCards[1].id);
                setMemoryCards(prevCards => {
                    let newCards = [...prevCards];
                    newCards[first].active = false;
                    newCards[second].active = false;
                    newCards[first].revealed = false;
                    newCards[second].revealed = false;
                    return newCards
                })
            }
        }, 500)
    }, [memoryCards]);


    
    function handleRestart() {
        setMemoryCards(prevCards => {
            let newCards = prevCards.map((card) => {
                return {
                    ...card,
                    revealed: false
                }
            })
            return newCards
        });
        setTimeout(() => {
            shuffleCards();
            setMemoryCards(() => [...cards]);
            clickCounter.current = 0;
        }, 700)
    }
    
    return (
        <div className='memory-game'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>Memory Game<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            <div className='memory-board'>
                {memoryCards.map(card => {
                    return (
                        <MemoryCard key={card.id} id={card.id} icon={card.icon} active={card.active} onReveal={handleReveal} revealed={card.revealed}/>
                    )
                })}
            </div>
            <div className='memory-bottom'>
                <p>Click count: {clickCounter.current}</p>
                <button className='memory-button' onClick={handleRestart}>Restart</button>
            </div>
        </div>
    )
}

export default MemoryGame;