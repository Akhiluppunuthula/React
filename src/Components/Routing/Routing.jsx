import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import ForgetScreen from "./ForgetScreen";

export default function Routing() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgot-password" element={<ForgetScreen />} />
        </Routes>
        <div className="flex justify-evenly">
        <Link to="/" className='border-2 rounded-md '>Home</Link>
        <Link to="/register" className='border-2 rounded-md '>Register Here</Link>
        <Link to="/forgot-password" className='border-2 rounded-md'>Forgot Password</Link>
      </div>
      </BrowserRouter>
    </div>
  );
}
