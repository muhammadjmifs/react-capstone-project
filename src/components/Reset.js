import React from 'react'

// Function for the component which handles the roll and new game button
export default function Reset(props) {
  return (
    // If game is over then allow for a new game on the button click else allow it to roll dice
    <button className="reset-dice" onClick={props.newGame}>Restart</button>
  )
}
