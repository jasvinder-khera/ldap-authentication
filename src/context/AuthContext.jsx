import React, { createContext, useState, useContext, useEffect } from "react";

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
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // For demo purposes - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "admin@example.com" && password === "password") {
        const userData = {
          id: 1,
          name: "John Doe",
          email: "admin@example.com",
          avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        };

        const token = "mock-jwt-token-12345";

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);

        return { success: true, user: userData, token };
      } else {
        return { success: false, message: "Invalid email or password" };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated, // Remove the function call, use the state
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
