
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail =  (event) => {
    const value = event.target.value;
    setEmail(value);
    if (value.length < 5) {
      setEmailError("UserName must be at least 6 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const details = {
      userName: email,
      password: password,
    };
    console.log(details);
    axios.get("http://localhost:3000/posts")
  
    try {
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    } catch (error) {
      console.error("Error posting login details:", error);
    }
  };

  return (
    <div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="image"
          className="relative h-screen w-screen overflow-hidden"
        />
      </div>
      <div className="flex items-center justify-center h-screen w-screen absolute top-0">
        <Form
          onSubmit={handleSubmit}
          className="bg-[#000000] p-9 rounded-md text-[#FFFFFF] "
        >
          <h1 className="font-bold text-3xl mb-4 font-sans">Sign In</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="UserName"
              className="border-2  rounded-md px-16 py-2 my-2 text-black"
              value={email}
              onChange={handleEmail}
            />
            <h1 className="text-orange-500">{emailError}</h1>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="border-2  rounded-md px-16 py-2 my-2 text-black"
              value={password}
              onChange={handlePassword}
            />
            <h1 className="text-orange-500">{passwordError}</h1>
          </Form.Group>
          <div className="flex justify-center">
            <Button
              variant="primary"
              type="submit"
              className="border rounded-md px-20 py-2 my-2 font-medium text-xl bg-[#E50914]"
            >
              Submit
            </Button>
          </div>
          <div className="flex justify-around my-3">
            <Link to="/register" className="border rounded-md p-2 ">
              Register Here
            </Link>
            <Link to="/forgot-password" className="border rounded-md p-2">
              Forgot Password
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginScreen;
