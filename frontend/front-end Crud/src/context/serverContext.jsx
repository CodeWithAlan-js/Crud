import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ServerResponseContext = createContext();

export const ServerResponseProvider = ({ children }) => {
  const [serverResponse, setServerResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-moovies");
        setServerResponse(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ServerResponseContext.Provider
      value={{ serverResponse, setServerResponse }}
    >
      {children}
    </ServerResponseContext.Provider>
  );
};

export const useServerResponse = () => useContext(ServerResponseContext);
