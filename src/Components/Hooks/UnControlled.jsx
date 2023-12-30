import React, { useRef } from 'react'

const UnControlled = () => {
    const user = useRef()
    const handleSub = (e)=>{
        e.preventDefault()
        console.log(user.current.value)
    }
  return (
    <div>
      <form onSubmit={handleSub}>
        <input type="text" ref={user} />
      </form>
    </div>
  )
}

export default UnControlled
