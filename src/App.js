import React from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import Auth from './pages/Auth'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Auth />
    </>
  );
}

export default App;
