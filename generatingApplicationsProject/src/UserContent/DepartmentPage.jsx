import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './userStyles.css/department.css';

const DepartmentsPage = () => {
  const [departmentsData, setDepartmentsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5009/forms/departmentJobs');
        if (response.data.success) {
          setDepartmentsData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  const handleJobClick = (department, jobPosition) => {
    // Store job selection in sessionStorage
    sessionStorage.setItem(
      'selectedJob',
      JSON.stringify({ department, jobPosition })
    );
    navigate('/apply');
  };

  return (
    <section className="departments" id="departments">
      <h2>Explore Job Opportunities</h2>
      <div className="department-grid">
        {departmentsData.map((dept, index) => (
          <div className="department-block" key={index}>
            <h3>{dept.department}</h3>
            <div className="job-list">
              {dept.jobPositions.map((job, jIndex) => (
                <div
                  key={jIndex}
                  className="job-card"
                  onClick={() => handleJobClick(dept.department, job)}
                >
                  {job} ➤
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsPage;
