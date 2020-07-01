import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const Auth = () => {
  const [authComponent, setAuthComponent] = useState("Login");

  const login = () => {
    setAuthComponent("Login");
  };

  const signUp = () => {
    setAuthComponent("SignUp");
  };


  if (authComponent === "Login") {
    return <Login signUp={signUp} />;
  }

  if (authComponent === 'SignUp')
  return <SignUp login={login} />;
};

export default Auth;