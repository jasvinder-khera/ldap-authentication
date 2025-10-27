import React from "react";

const Navbar = ({ toggleSidebar, user, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>

        <div className="d-flex align-items-center ms-auto">
          <div className="dropdown me-3">
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dropdown-toggle"
              id="dropdownUser"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={
                  user?.avatar ||
                  "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                }
                alt="User"
                className="user-avatar me-2"
              />
              <span>{user?.name || "User"}</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownUser"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user me-2"></i> Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cog me-2"></i> Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" onClick={onLogout}>
                  <i className="fas fa-sign-out-alt me-2"></i> Sign out
                </button>
              </li>
            </ul>
          </div>

          <div className="position-relative">
            <button className="btn btn-light position-relative">
              <i className="fas fa-bell"></i>
              <span className="notification-badge">3</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
