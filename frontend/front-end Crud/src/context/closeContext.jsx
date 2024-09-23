import { createContext, useContext, useState } from "react";

const CloseContext = createContext();

export const CloseProvider = ({ children }) => {
  const [isClose, setIsClose] = useState(false);

  const toggleClose = () => {
    setIsClose(!isClose);
  };

  return (
    <CloseContext.Provider value={{ isClose, setIsClose, toggleClose }}>
      {children}
    </CloseContext.Provider>
  );
};

export const useClose = () => useContext(CloseContext);
