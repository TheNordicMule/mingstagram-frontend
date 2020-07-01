import React from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from './pages/Auth'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Auth />
    </>
  );
}

export default App;
