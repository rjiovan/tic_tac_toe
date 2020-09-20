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
        const board = [...board];
        //If user clicked on occupied square or if game is won, return
        if (winner || board[i]) return;

        //Put an X or an O in the clicked square
        board[i] = xIsNext ? 'X' : 'O'; //check if X is nex otherwise set it to O
        setBoard(board);
        setXIsNext(!xIsNext);
    }

    const jumpTo = () => {
        
    }

    const renderMoves = () => {
        
    }

    return (
        <div>
            <Board squares={board} play={handleClick}/>
        </div>        
    )
}

export default Game;