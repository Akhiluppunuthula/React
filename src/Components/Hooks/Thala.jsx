import React, { useState } from 'react'

const Thala = () => {
    const [thala,setThala]=useState("")
    const handleChange = (e)=>{
        const user = e.target.value
        setThala(user)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const details = {
            user:thala
        }
        if(thala.length==7){
            alert("thala")
        }
        else{
            alert("not thala")
        }
        console.log(details)
        setThala("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={thala} onChange={handleChange}/>
        <input type="submit"  />
      </form>
    </div>
  )
}

export default Thala
