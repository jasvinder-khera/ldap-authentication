import React from "react";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ isActive, toggleSidebar }) => {
  const { logout } = useAuth();
   const handleLogout = () => {
     logout();
   };
  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo">
        <h3 className="mb-0">
          <i className="fas fa-chart-pie me-2"></i>HORIBA India
        </h3>
      </div>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="fas fa-home"></i> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-chart-line"></i> Analytics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-shopping-cart"></i> E-commerce
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-users"></i> Customers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-cog"></i> Settings
          </a>
        </li>
        <li className="nav-item">
          <button className="nav-link w-100 text-start" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i> Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
