//Vendor libraries
import React from 'react'

//Styles
import './Board.css';

//Components
import Square from './Square';

//Functional component
const Board = ({ squares, onClick }) => { 

    return (
        <div className="board">
            { squares.map((square, i) => <Square key={i} value={square} onClick={() => onClick(i)}/> )}
        </div>        
    )
}

export default Board;