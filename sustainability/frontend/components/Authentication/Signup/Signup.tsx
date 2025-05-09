import React from 'react';
 import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";


const Signup: React.FC = () => {

   const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
      });
    
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    }; 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    // Validate inputs
    const validationErrors: { [key: string]: string } = {};

    if (!formData.username.trim()) validationErrors.username = "Username is required";
    //if (!formData.email.includes("@")) validationErrors.email = "Valid email is required";
    if (formData.password.length < 6) validationErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      try {
        const res = await fetch('http://localhost:3003/users/create-user', {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const text = await res.text();
        alert(text);
      }
      catch (error) {
        console.log("Error connecting to the server", error);
      }
    }
  }
      return (
        <div className="page-container">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                //change value below in backend w/ state managment
                value={formData.username}
                onChange={handleChange}
                className={`form-input ${errors.username ? "input-error" : ""}`}
              /> 
            {errors.username && <p className="error-text">{errors.username}</p>}

            </div>
{/*     
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                //change value below in backend w/ state management
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "input-error" : ""}`}
                />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div> */}
    
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                //change value below in backend w/ state management
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "input-error" : ""}`}
                />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
    
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                //change value below in backend w/ state managment 
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
                /> 
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
    
            <button type="submit" className="submit-button">
              Sign Up
            </button>
          </form>
          <Link to="/login">
            Already have an account? Sign in here!
          </Link>  
        </div>
        </div>
      );
}

export default Signup;








