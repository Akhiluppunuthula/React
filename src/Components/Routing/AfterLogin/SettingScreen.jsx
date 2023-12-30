import { useContext } from "react"
import ChildFn from "../../Hooks/ChildFn"
import ParentCls from "../../Hooks/ParentCls"
import StateChild from "../../Hooks/StateChild"
import StateParent from "../../Hooks/StateParent"
import Thala from "../../Hooks/Thala"
import UseMemo from "../../useMemo/UseMemo"
import Reducer from "../../useReducer/Reducer"
import Reducer2 from "../../useReducer/Reducer2"
import UseRef from "../../useRef/UseRef"
import Header from "./Header"
import { Context } from "../../Hooks/UseContext"


const SettingScreen = () => {
  const details = useContext(Context)
  return (
    <div> 
    {/* <Header/>
    <Reducer/> */}
    {/* <UseRef/>
    <UseMemo/>
    <Reducer2/> */}
    {/* <Thala/> */}
    {/* <ParentCls/> */}
    {/* <ChildFn/> */}
    <StateParent/>
   details.login
    {/* <StateChild/> */}
    </div>
  )
}

export default SettingScreen