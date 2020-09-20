//Vendor libraries
import React from 'react'

//Styles
import './Square.css';

//Functional component
const Square = ({value, onClick}) => { 
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>        
    )
}

export default Square;