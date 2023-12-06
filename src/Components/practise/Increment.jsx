import { useState } from "react"

const Increment = ()=>{
    const[count,setCount] = useState(0)
    return(
        <div className="block m-6	">
            <h1>Count:{count}</h1>
            <button className="border-solid border-2 border-sky-500 m-6	" onClick={() => setCount(count+1)}>increment</button><br />
            <button className="border-solid border-2 border-sky-500 m-6	" onClick={() => setCount(count-1)}>decrement</button>
        </div>
    )
}


export default Increment