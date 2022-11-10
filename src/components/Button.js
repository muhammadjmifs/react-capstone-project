import React from 'react'

// Function for the component which handles the roll and new game button
export default function Button(props) {
  return (
    <button 
      className="roll-dice"
      // If game is over then allow for a new game on the button click else allow it to roll dice
      onClick={props.tenzies ? props.newGame :  ()=>{props.incCount(); props.rollDice()}}
      >
        {props.tenzies ? "New Game" : "Roll"}
    </button>
  )
}
