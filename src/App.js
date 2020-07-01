import React from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Login />
    </>
  );
}

export default App;
