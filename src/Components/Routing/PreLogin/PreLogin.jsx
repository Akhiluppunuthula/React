import { Route, Routes } from "react-router-dom";
import ForgetScreen from "../BeforeLogin/ForgetScreen";
import LoginScreen from "../BeforeLogin/LoginScreen";
import RegisterScreen from "../BeforeLogin/RegisterScreen";
import InvalidScreen from "../AfterLogin/InvalidScreen";

const PreLogin = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/forgot-password" element={<ForgetScreen />} />
      <Route path="/*" element={<InvalidScreen />} />
    </Routes>
  );
};

export default PreLogin;
