// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("shajjar");

  const login = (userData) => {
    // Handle authentication logic and set the user state
    setUser(userData);
  };

  const logout = () => {
    // Handle logout logic and set the user state to null
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);


