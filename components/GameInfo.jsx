import React from 'react'
import keyboard from '../assets/key.png'

export default function Gameinfo( props) {


    return (
        <>
            <div className='gameinfo__container'>
                <h1>Discover the hidden quiz!</h1>
                <p>Welcome to the mysterious house filled with surprises and interactive items! Step into this enchanting virtual house and embark on an exciting journey to uncover the hidden quiz. Explore each room by walking around and clicking on all the items. If you crack all the puzzles and answer the quiz correctly, a prize awaits you! Do you dare to take on the challenge and unravel the secrets of the house? Best of luck with your adventure! Hint: A iMac pc is clickable </p>
            </div>
            <div className='gameinfo__buttonContainer'>
                <a href="/">Restart</a>
                <button onClick={props.handleClick}>Fullscreen</button>
            </div>
            <div className='gameinfo__gradientLine'></div>
            <div className='gameinfo__controls'>
                <img src={keyboard} alt="keyboard"/>
            </div>
        </>
    )
}