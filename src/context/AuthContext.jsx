import React, { createContext, useState, useContext, useEffect } from "react";
import { login as apiLogin } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on app start
    const access = localStorage.getItem("accessToken");
    const userDetails = localStorage.getItem("userDetails");

    if (access && userDetails) {
      try {
        const parsedUser = JSON.parse(userDetails);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        // Clear invalid data
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userDetails");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiLogin({ email, password });
      const { access, refresh } = response.data;
      console.log("Result", response.data.user[0]);

      const userData = response.data.user[0];

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("userDetails", JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true);

      return {
        success: true,
        user: userData,
        access,
        refresh,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken"); // Added missing refreshToken removal
    localStorage.removeItem("userDetails");
    setUser(null); // Added missing setUser null
    setIsAuthenticated(false);
  };

  const value = {
    user, // Added user back to context
    loading,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
