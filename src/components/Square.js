//Vendor libraries
import React from 'react'

//Styles
import './Square.css';

//Functional component
const Square = ({value, play}) => { 
    return (
        <button className="square" onClick={play}>
            {value}
        </button>        
    )
}

export default Square;