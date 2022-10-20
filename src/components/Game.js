import React, { useState } from 'react'

const genRandomColor = () => {
    let pool = ['A', 'B', 'C', 'D','E','F','0','1','2','3','4','5','6','7','8','9'];
    let color = "#";

    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random() * pool.length);
        color += pool[randomIndex];
    }

    return color;
}

const handleChoice = (clickedButton,answer) => {
    let choice = clickedButton.target.value;
    if(choice === answer) return true;
    else return false;
}

function Game() {
    const [level, setlevel] = useState(0)
    const colors = [genRandomColor(), genRandomColor(), genRandomColor()];
    const bgColor = colors[Math.floor(Math.random()*colors.length)];
    return (
        <div className='game-window' style={{backgroundColor: bgColor}}>
            <h1>Level: {level} </h1>
            <div className='choices'>
                {colors.map(color => {
                    return <button value={color} key={color} onClick={event => {
                        if(handleChoice(event,bgColor) === true) setlevel(level+1);
                        else setlevel(0);
                    }
                    }>{color}</button>
                })}
            </div>
        </div>
    )
}

export default Game