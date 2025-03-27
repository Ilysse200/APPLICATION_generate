import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './userStyles/apply.css';

const ApplyPage = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedJob = sessionStorage.getItem('selectedJob');
    if (storedJob) {
      setSelectedJob(JSON.parse(storedJob));
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const applicationData = {
        ...data,
        department: selectedJob?.department,
        jobPosition: selectedJob?.jobPosition,
      };

      await axios.post('http://localhost:5009/forms/createForm', applicationData);
      alert('Application submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <section className="application-form" id="apply">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name:</label>
        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Enter full name" />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label>Email:</label>
        <input type="email" {...register("email", { required: "Email is required" })} placeholder="Enter email address" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Phone Number:</label>
        <input type="tel" {...register("phone", { required: "Phone number is required" })} placeholder="Enter phone number" />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        <label>Department:</label>
        <input type="text" value={selectedJob?.department || ""} disabled />

        <label>Job Position:</label>
        <input type="text" value={selectedJob?.jobPosition || ""} disabled />

        <label>Where did you hear about us?</label>
        <select {...register("referral", { required: "Please select a referral option" })}>
          <option value="">Select an option</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend or Colleague">Friend or Colleague</option>
          <option value="Online Advertisement">Online Advertisement</option>
          <option value="Search Engine">Search Engine</option>
          <option value="Other">Other</option>
        </select>
        {errors.referral && <p className="error">{errors.referral.message}</p>}

        <div className="terms-container">
          <input type="checkbox" {...register("termsAccepted", { required: "You must accept the terms and conditions" })} />
          <label>I agree to the Terms & Conditions</label>
        </div>
        {errors.termsAccepted && <p className="error">{errors.termsAccepted.message}</p>}

        <label>Upload Resume:</label>
        <input type="file" {...register("resume", { required: "Please upload your resume" })} accept=".pdf,.doc,.docx" />
        {errors.resume && <p className="error">{errors.resume.message}</p>}

        <button type="submit" className="btn-submit">Submit Application</button>
      </form>
    </section>
  );
};

export default ApplyPage;
