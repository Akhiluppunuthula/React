import React, { createContext, useState } from 'react'
import SettingScreen from '../Routing/AfterLogin/SettingScreen'



export const Context = createContext()

const UseContext = () => {
    const [login,setLogin]= useState(false)
  return (
    <div>
        <Context.Provider value={login}>
      <SettingScreen/>
      </Context.Provider>
    </div>
  )
}

export default UseContext
