import React from 'react';
import './userStyles.css/apply.css';

const ApplyPage = () => {
  return (
    <section className="application-form" id="apply">
      <h2>Application Form</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <div className="file-drop">
          <label htmlFor="resume">Drop your resume here or click to upload</label>
          <input type="file" id="resume" />
        </div>
        <button type="submit" className="btn-submit">Submit Application</button>
      </form>
    </section>
  );
};

export default ApplyPage;
