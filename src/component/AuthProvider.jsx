import React, { createContext, useState, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true); // Update state to indicate the user is logged in
  };

  const logout = () => {
    setIsAuthenticated(false); // Update state to indicate the user is logged out
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
