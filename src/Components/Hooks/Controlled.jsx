import React, { useState } from 'react'

const Controlled = () => {
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const handleUser = (e)=>{
        setUser(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(user,password)
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={user} onChange={handleUser} />
      <input type="text" value={password} onChange={handlePassword} />
      </form>
    </div>
  )
}

export default Controlled
