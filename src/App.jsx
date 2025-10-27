// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}> */}
          <Route path="dashboard" element={<Dashboard logout={logout} />} />
        {/* </Route> */}

        <Route path="/" element={<Login login={login} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
