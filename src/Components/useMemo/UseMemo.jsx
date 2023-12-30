import React, { useMemo } from 'react'

const UseMemo = ({a,b}) => {

    const result = useMemo(()=>{
        return 2+4;
    },[a,b])
  return (
    <div>
      <p>UseMemo</p>
      <h1>{result}</h1>
    </div>
  )
}

export default UseMemo
