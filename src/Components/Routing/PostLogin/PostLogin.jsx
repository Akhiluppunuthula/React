import { Route, Routes } from "react-router-dom"
import HomeScreen from "../AfterLogin/HomeScreen"
import InvalidScreen from "../AfterLogin/InvalidScreen"
import SettingScreen from "../AfterLogin/SettingScreen"
import AboutScreen from "../AfterLogin/AboutScreen"
import ProductDetails from "../AfterLogin/ProductDetails"
import HeaderProduct from "../AfterLogin/HeaderProduct"


const PostLogin = () => {
  return (
    <Routes>
       <Route path="/" element={<HomeScreen />} />
       <Route path="/about" element={<AboutScreen />} />
       <Route path="/setting" element={<SettingScreen />} />
       <Route path="/*" element={<InvalidScreen />} />
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/products/:id" element={<HeaderProduct />} />
    </Routes>
  )
}

export default PostLogin
