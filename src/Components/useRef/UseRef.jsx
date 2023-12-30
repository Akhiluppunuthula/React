import { useEffect, useRef, useState } from "react"


const UseRef = () => {
    const usage=useRef(null)
    useEffect(()=>{
        usage.current.focus()
    },[])
  return (
    <div>
       <input type="text" ref={usage}/>
    </div>
  )
}

export default UseRef
