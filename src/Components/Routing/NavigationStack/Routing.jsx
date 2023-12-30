import { BrowserRouter} from "react-router-dom";
import PostLogin from "../PostLogin/PostLogin";
import PreLogin from "../PreLogin/PreLogin";
import { createContext, useState } from "react";


export const LoginInfo = createContext()
export default function Routing() {
  const [login,setLogin]=useState(true)
  const singIn = ()=>{
    setLogin(true)
  }
  const signOut = ()=>{
    setLogin(false)
  }
  return (
    <div>
      <LoginInfo.Provider value={{login,singIn,signOut}}>
      <BrowserRouter>
       {login ? <PostLogin /> : <PreLogin />}
      </BrowserRouter>
      </LoginInfo.Provider>
    </div>
  );
}
