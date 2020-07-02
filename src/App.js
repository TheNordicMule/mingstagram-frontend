import React, { useContext } from "react";
import "./styles/App.css";
// import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";
import { UserContext, UserProvider } from "./contexts/UserContext";

function App() {
  const user = useContext(UserContext);
  const Page = () => {
    if (user) return null;
    return <Auth />;
  };
  return (
    <>
      <UserProvider>
        <Page />
      </UserProvider>
    </>
  );
}

export default App;
