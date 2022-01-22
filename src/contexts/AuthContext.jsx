import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({ token: "", handleToken: () => {} });

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleToken = (token) => {
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};
