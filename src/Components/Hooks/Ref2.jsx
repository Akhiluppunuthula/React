import React, { useEffect, useRef } from 'react'

const Ref2 = () => {
    const countRef = useRef(0)
    useEffect(()=>{
        countRef.current = countRef.current + 1
    },[])
  return (
    <div>
      <p>{countRef.current}</p>
    </div>
  )
}

export default Ref2
