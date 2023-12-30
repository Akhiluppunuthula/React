import React, { useState } from 'react'

const State = () => {
    cosnt [count,setCount]=useState(0)
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default State
