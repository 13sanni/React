import React from 'react'

const CounterButton = ({count , onIncrease}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>Click</button>
    </div>
  )
}

export default CounterButton
