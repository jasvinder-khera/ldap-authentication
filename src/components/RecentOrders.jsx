import React from "react";

const RecentOrders = () => {
  const orders = [
    {
      id: "#ORD-7841",
      customer: "John Smith",
      date: "12 Feb, 2023",
      amount: "$245.99",
      status: "Completed",
      statusClass: "success",
    },
    {
      id: "#ORD-7840",
      customer: "Sarah Johnson",
      date: "11 Feb, 2023",
      amount: "$145.99",
      status: "Pending",
      statusClass: "warning",
    },
    {
      id: "#ORD-7839",
      customer: "Michael Brown",
      date: "10 Feb, 2023",
      amount: "$89.99",
      status: "Completed",
      statusClass: "success",
    },
    {
      id: "#ORD-7838",
      customer: "Emily Davis",
      date: "9 Feb, 2023",
      amount: "$199.99",
      status: "Cancelled",
      statusClass: "danger",
    },
    {
      id: "#ORD-7837",
      customer: "Robert Wilson",
      date: "8 Feb, 2023",
      amount: "$299.99",
      status: "Completed",
      statusClass: "success",
    },
  ];

  return (
    <div className="card">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Recent Orders</h5>
        <a href="#" className="btn btn-sm btn-outline-primary">
          View All
        </a>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`badge bg-${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
