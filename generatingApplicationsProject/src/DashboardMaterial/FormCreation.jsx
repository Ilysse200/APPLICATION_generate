import React, { useState } from "react";
import "./dashboardStyles/formCreation.css";

const FormCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    jobPosition: "",
    referral: "",
    termsAccepted: false,
    resume:null,
  });

  // Departments and job positions mapping
  const departmentOptions = {
    "IT Department": ["Software Engineer", "Data Scientist", "UX Designer"],
    "Finance Department": ["Accountant", "Financial Analyst", "Auditor"],
    "Business Department": ["Business Analyst", "Marketing Manager", "Product Manager"],
    "Sales Department": ["Sales Representative", "Customer Support Specialist", "Sales Manager"],
  };

  const referralOptions = [
    "Social Media",
    "Friend or Colleague",
    "Online Advertisement",
    "Search Engine",
    "Other",
  ];

  // Handle form state update
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle department change (reset job position)
  const handleDepartmentChange = (e) => {
    setFormData({ department: e.target.value, jobPosition: "" });
  };

  // Submit function (for now, logs the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must accept the terms and conditions!");

      // Create FormData to send files
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("department", formData.department);
    data.append("jobPosition", formData.jobPosition);
    data.append("referral", formData.referral);
    data.append("resume", formData.resume); // Attach file

    console.log("Form Data Submitted:", formData);
    alert("Form Created Successfully!");
      return;
    }
    console.log("Form Data:", formData);
    alert("Form Created Successfully!");
  };

  return (
    <div className="form-container">
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email Input */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone Number Input */}
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Department Dropdown */}
        <label>Department:</label>
        <select name="department" value={formData.department} onChange={handleDepartmentChange} required>
          <option value="">Select a department</option>
          {Object.keys(departmentOptions).map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        {/* Job Position Dropdown */}
        {formData.department && (
          <>
            <label>Job Position:</label>
            <select name="jobPosition" value={formData.jobPosition} onChange={handleChange} required>
              <option value="">Select a job position</option>
              {departmentOptions[formData.department].map((job) => (
                <option key={job} value={job}>{job}</option>
              ))}
            </select>
          </>
        )}

        {/* Referral Dropdown */}
        <label>Where did you hear about us?</label>
        <select name="referral" value={formData.referral} onChange={handleChange} required>
          <option value="">Select an option</option>
          {referralOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        {/* Terms & Conditions Checkbox */}
        <div className="terms-container">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <label>I agree to the Terms & Conditions</label>
        </div>
        {/*File Upload */}
        <label>Upload Resume:</label>
        <input
      type="file"
      name="resume"
      accept=".pdf,.doc,.docx" // Allow only certain file types
      onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
/>

        {/* Submit Button */}
        <button type="submit">Create Form</button>
      </form>
    </div>
  );
};

export default FormCreation;
