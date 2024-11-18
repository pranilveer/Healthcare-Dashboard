import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nAge: ${formData.age}`);
  };

  return (
    <div className="container">
      <div className="dashboard">
        <h1>Healthcare Dashboard</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-group-1 form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age Dropdown */}
          <div className="form-group-2">
            <label htmlFor="age">Age:</label>
            <select
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Age
              </option>
              {[...Array(100).keys()].map((age) => (
                <option key={age} value={age + 1}>
                  {age + 1}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div className="form-group-3 form-group">
            <label htmlFor="file">Upload File:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileUpload}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
