import React from 'react'

// Function that handles the count Component
export default function Count(props) {
  return (
    <p>{props.count > 0 ? `The dice has been rolled ${props.count} time${props.count > 1 ? "s" : ""}` : "The dice has not yet been rolled"}</p>
  )
}
