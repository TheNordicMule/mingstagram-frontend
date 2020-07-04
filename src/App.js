import React, { useContext } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { user } = useContext(UserContext);
  const Main = () => {
    return (
      <>
        <NavBar />
        <Home />
      </>
    );
  };

  return <>{user ? <Main /> : <Auth />}</>;
}

export default App;
