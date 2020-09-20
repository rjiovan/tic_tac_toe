//Vendor libraries
import React, { useState } from 'react'

//Styles
import './Game.css';

//Components
import Board from './Board';
import { calculateWinner } from '../utilities/calcWinner';

//Functional component
const Game = () => { 
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = (i) => {
        const boardCopy = [...board];
        //If user clicked on occupied square or if game is won, return
        if (winner || boardCopy[i]) return;

        //Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O'; //check if X is next (turn) otherwise set it to O
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    }

    return (
        <div>
            <Board squares={board} onClick={handleClick}/>
            <div className="winner-message">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </div>        
    )
}

export default Game;