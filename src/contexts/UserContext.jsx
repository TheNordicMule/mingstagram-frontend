import React, { useState, createContext } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const tokenData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(tokenData ? tokenData : null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
