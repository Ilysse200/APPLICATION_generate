import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userStyles/apply.css';

const ApplyPage = () => {
  const [formFields, setFormFields] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('selectedJob');
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log(JSON.parse(stored));
      setSelectedJob(parsed);
      fetchForm(parsed.jobId);
    }
  }, []);

  const fetchForm = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:5009/formBuild/formBlueprints/${jobId}`);
      if (response.data?.fields) {
        setFormFields(response.data.fields);
      }
    } catch (error) {
      console.error('Error loading form:', error);
    }
  };

  const handleChange = (e, fieldName) => {
    const { type, checked, value, files } = e.target;
    setFormValues({
      ...formValues,
      [fieldName]: type === 'checkbox' ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const [key, value] of Object.entries(formValues)) {
      data.append(key, value);
    }
    data.append('jobId', selectedJob?.jobId);

    try {
      await axios.post('http://localhost:5009/forms/submit', data);
      alert('Application submitted!');
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Submission failed');
    }
  };

  return (
    <section className="apply-section">
      <h2>Apply for Job</h2>
  
      {selectedJob && (
        <div className="job-info-banner">
          <p><strong>Department:</strong> {selectedJob.department}</p>
          <p><strong>Job Title:</strong> {selectedJob.jobTitle || 'Unknown'}</p>
        </div>
      )}
  
      <form className="apply-form" onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}{field.required && '*'}</label>
            {field.type === 'text' && (
              <input
                type="text"
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(e, field.label)}
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleChange(e, field.label)}
              ></textarea>
            )}
            {field.type === 'file' && (
              <input
                type="file"
                required={field.required}
                onChange={(e) => handleChange(e, field.label)}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
  
export default ApplyPage;
