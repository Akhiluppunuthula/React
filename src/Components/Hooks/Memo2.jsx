import React, { useMemo, useState } from 'react'

const Memo2 = () => {
    const [result,setResult] = useState(null)
    const square = useMemo(()=>{
        return result**2
    },[count])
  return (
    <div>
      <p>{result}</p>
      <p>{square}</p>
      <button onClick={()=>setResult(result+1)}>Increment</button>
    </div>
  )
}

export default Memo2
