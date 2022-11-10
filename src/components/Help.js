import React from 'react'

export default function Help(props) {
  // Function to create the help component
  return (
    <div>  
      <dialog id="help-dialog">  
        <h2>Instructions on how to play:</h2>
        <ul>
          <li>The goal of tenzies is to have all numbers the same</li>
          <li>Pick a number on the board (You should aim for a number which there is the most of) and select all of the same numbers</li>  
          <li>Click roll</li>
          <li>Pick again the same matching numbers until all numbers are green</li>
          <li>Once all numbers are the same and green, You have won</li>
          <li>Click restart to start again</li>
        </ul>
        {/* Button which closes the help dialog */}
        <button className="close-button" onClick={props.hideDialog}>Close</button>  
      </dialog>  
      {/* Button which opens the help dialog */}
        <button className="show-button" onClick={props.showDialog}>Need Help?</button>  
    </div> 
  )
}
