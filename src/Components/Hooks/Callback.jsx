import React, { useCallback } from 'react'

const Callback = () => {
    const [count,setCount]=useState(0)
    const increment = useCallback(()=>{
        setCount(count+1)
    },[count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Callback
