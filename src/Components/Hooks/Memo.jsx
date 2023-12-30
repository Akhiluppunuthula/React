import React, { useMemo } from 'react'

const Memo = ({a,b}) => {
    const result = useMemo(()=>{
        return 2+3
    },[a,b])
  return (
    <div>
      <p>{result}</p>
    </div>
  )
}

export default Memo
