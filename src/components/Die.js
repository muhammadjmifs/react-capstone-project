import React from 'react'

// Function that handles the Component for each die
export default function Die(props) {
    return (
      // If more than one of the values selected are equal then hold the values
      <div onClick={props.holdDice} className='die-face' style={{backgroundColor: props.isHeld ? "#59E391" : "white" }}>
        <h2 className='die-num'>{props.value}</h2>
      </div>
    )
  }
