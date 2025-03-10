import React, { useState } from "react";
import "./dashboardStyles/applications.css";

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const applicationsData = [
    { job: "Software Engineer", applications: 20, pending: 25 },
    { job: "Product Manager", applications: 18, pending: 23 },
    { job: "Data Scientist", applications: 15, pending: 20 },
    { job: "Marketing Manager", applications: 12, pending: 15 },
    { job: "Sales Representative", applications: 10, pending: 12 },
    { job: "UX Designer", applications: 8, pending: 10 },
    { job: "Customer Support Specialist", applications: 5, pending: 7 },
    { job: "Business Analyst", applications: 3, pending: 5 },
    { job: "HR Coordinator", applications: 2, pending: 3 },
    { job: "Accountant", applications: 1, pending: 2 },
  ];

  return (
    <div className="applications-container">
      <h2 className="applications-title">Applications</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search by job title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="applications-table">
        <thead>
          <tr>
            <th>Job Position</th>
            <th>Applications</th>
            <th>Pending Applications</th>
          </tr>
        </thead>
        <tbody>
          {applicationsData
            .filter((item) =>
              item.job.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.job}</td>
                <td>{item.applications}</td>
                <td>{item.pending}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="pagination">
        <button>{"<"}</button>
        <span className="active-page">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Applications;
