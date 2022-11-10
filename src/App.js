// React - Capstone Project - Create a game - Tenzies
import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import Button from './components/Button'
import Count from './components/Count'
import Reset from './components/Reset'
import Help from './components/Help'

function App() {

  // Initialise state of the dice
  const [dice, setDice] = React.useState(allNewDice())

  //Initialise winning state
  const [tenzies, setTenzies] = React.useState(false)

  // Initialise state of the counter
  const [count, setCount] = React.useState(0)

  // Do a check if all values of the dice are equal and all have been selected and update Tenzies state every time a die is clicked
  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  // Generate a new die
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

  // Generate an array with 10 random numbers between 1 and 6
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }


  // For each value in the array render 10 Die elements
  const diceElements = dice.map(die => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)}/>
  })

  // Function that updates the state of the dice object and generates new numbers
  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld === true ? die : generateNewDie()
    }))
  }

  // Function that changes the isHeld state of the die when it is clicked
  function holdDice(id) {
      setDice(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      }))
  }

  // Function that increments the counter everytime the dice is rolled
  function incCount(){
    setCount(prevCount => {
      return prevCount +1
    })
}

  // Function to reset states when clicking new game or restart
  function newGame() {
    setTenzies(false)
    setDice(allNewDice()) 
    setCount(0)
  }

  // Function to open and close the help dialog
  function showDialog() {
    document.getElementById('help-dialog').show();
  }
  function hideDialog() {
    document.getElementById('help-dialog').close();
  } 

  // App Components to be rendered
  return (
    <main>
      {/* Display confetti when the game is won */}
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <div className="buttons">
        {/* Roll button that gets new dice when clicked or begins a new game*/}
        <Button tenzies={tenzies} rollDice={()=>rollDice()} newGame={()=>newGame()} incCount={()=>incCount()}/>
        {/* Reset button that sets evrything back to the initial state*/}
        <Reset newGame={()=>newGame()}/>
      </div>
        {/* Load the count component and pass the count prop */}
        <Count count={count}/>
        <Help showDialog={showDialog} hideDialog={hideDialog}/>
    </main>
  )
}

export default App;
