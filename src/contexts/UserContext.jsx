import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const tokenData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(tokenData ? tokenData : null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

