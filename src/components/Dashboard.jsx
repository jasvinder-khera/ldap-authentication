import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import StatsCard from "./StatsCard";
import RevenueChart from "./RevenueChart";
import TrafficChart from "./TrafficChart";
import RecentOrders from "./RecentOrders";
import ProjectProgress from "./ProjectProgress";

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  // const { user, logout } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleLogout = () => {
    logout();
  };

  const statsData = [
    {
      title: "Total Revenue",
      value: "$24,580",
      change: "+12.5%",
      icon: "fas fa-dollar-sign",
      bgClass: "bg-primary-light",
    },
    {
      title: "New Customers",
      value: "4,210",
      change: "+8.3%",
      icon: "fas fa-users",
      bgClass: "bg-success-light",
    },
    {
      title: "Orders",
      value: "1,258",
      change: "-3.4%",
      icon: "fas fa-shopping-cart",
      bgClass: "bg-warning-light",
    },
    {
      title: "Conversion Rate",
      value: "86%",
      change: "+5.7%",
      icon: "fas fa-chart-pie",
      bgClass: "bg-info-light",
    },
  ];

  return (
    <div className="Dashboard">
      <Sidebar isActive={sidebarActive} toggleSidebar={toggleSidebar} />
      <div
        className="main-content"
        style={{ marginLeft: isMobile ? "0" : "250px" }}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          // user={user}
          onLogout={handleLogout}
        />

        <div className="container-fluid mt-4">
          {/* Welcome Message */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  {/* <h4 className="card-title">Welcome back, {user?.name}!</h4> */}
                  <p className="card-text text-muted">
                    Here's what's happening with your business today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row">
            {statsData.map((stat, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <StatsCard
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  bgClass={stat.bgClass}
                />
              </div>
            ))}
          </div>

          {/* Charts and Tables */}
          <div className="row">
            <div className="col-xl-8">
              <RevenueChart />
            </div>

            <div className="col-xl-4">
              <TrafficChart />
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <RecentOrders />
            </div>

            <div className="col-xl-6">
              <ProjectProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
