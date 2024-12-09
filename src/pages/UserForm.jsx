import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({ username: "", mobile: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to /user and pass formData as state
    navigate("/user", { state: { username: formData.username, mobile: formData.mobile } });
  };

  return (<>
    <div className="form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    <div className="hero">
      <div className="img-container">
                <img src="./image/proof.jpg" alt="" />
               <img src="./image/proof2.jpg" alt="" />       
               </div>     
               </div>
  </>
  );
};

export default UserForm;
