import { useState } from "react"


const TimerUse = () => {
    const [count,setCount]=useState(0)
    const [time,setTime]=useState(null)
const handleClick=()=>{
  let interval = setInterval(()=>{
        setCount((previous)=>previous+1)
    },1000)
    setTime(interval)
}
const handleEnd = () => {
    clearInterval(time);
    setCount(0)
};
  return (
    <div>
      <h1>{count}</h1>
<button onClick={handleClick}>start </button>
<button onClick={handleEnd}>reset</button>
    </div>
    
  )
}

export default TimerUse
