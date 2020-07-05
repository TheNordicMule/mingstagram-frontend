import React, { useState, createContext } from "react";

export const FeedContext = createContext(null);

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {children}
    </FeedContext.Provider>
  );
};
