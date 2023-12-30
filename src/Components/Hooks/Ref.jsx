import React, { useEffect, useRef } from 'react'

const Ref = () => {
    const input = useRef()
    useEffect(()=>{
        input.current.focus()
    },[])
  return (
    <div>
      <input type="text" value={input} />
    </div>
  )
}

export default Ref
