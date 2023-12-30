import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title={count}
        return ()=>{
            document.title="React App"
        }
    },[count])
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

export default Effect
