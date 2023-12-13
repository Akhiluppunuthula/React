import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterScreen() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPass, setCPass] = useState("");
  const [cPassError, setCPassError] = useState("");

  const handleUserName = (event) => {
    const value = event.target.value;
    setUserName(value);
    if (value.length < 6) {
      setUserNameError("Username must be at least 6 characters");
    } else {
      setUserNameError("");
    }
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (value.length < 6) {
      setEmailError("Email must be at least 6 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (event) => {
    const pass = event.target.value;
    setPassword(pass);
    if (pass.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleCPassword = (event) => {
    const cpass = event.target.value;
    setCPass(cpass);
    if (cpass !== password) {
      setCPassError("Passwords do not match");
    } else {
      setCPassError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      userName.length < 6 ||
      email.length < 6 ||
      password.length < 6 ||
      cPass !== password
    ) {
      console.log("Validation failed");
      return;
    }

    const details = {
      userName: userName,
      password: password,
    };
    console.log(details);

    setUserName("");
    setUserNameError("");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setCPass("");
    setCPassError("");
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
          className="bg-[#000000] p-9 rounded-md text-[#FFFFFF]"
        >
          <h1 className="font-bold text-3xl mb-4 font-sans">Register Here</h1>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Control
              type="text"
              placeholder="UserName"
              className="border-2  rounded-md px-16 py-2 my-2"
              value={userName}
              onChange={handleUserName}
            />
            <h1 className="text-orange-500">{userNameError}</h1>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
              className="border-2  rounded-md px-16 py-2 my-2"
              value={email}
              onChange={handleEmail}
            />
            <h1 className="text-orange-500">{emailError}</h1>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="border-2  rounded-md px-16 py-2 my-2"
              value={password}
              onChange={handlePassword}
            />
            <h1 className="text-orange-500">{passwordError}</h1>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="ConfirmPassword"
              className="border-2  rounded-md px-16 py-2 my-2"
              value={cPass}
              onChange={handleCPassword}
            />
            <h1 className="text-orange-500">{cPassError}</h1>
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
        </Form>
      </div>
    </div>
  );
}

export default RegisterScreen;
