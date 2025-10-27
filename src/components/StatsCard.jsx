import React from "react";

const StatsCard = ({ title, value, change, icon, bgClass }) => {
  const isPositive = change && change.startsWith("+");

  return (
    <div className="card stat-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <div className="value">{value}</div>
            <div className="label">{title}</div>
          </div>
          <div className={`${bgClass} rounded`}>
            <i className={icon}></i>
          </div>
        </div>
        {change && (
          <div className="mt-3">
            <span className={isPositive ? "text-success" : "text-danger"}>
              <i className={`fas fa-arrow-${isPositive ? "up" : "down"}`}></i>{" "}
              {change.replace("+", "").replace("-", "")}
            </span>
            <span className="text-muted"> from last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
