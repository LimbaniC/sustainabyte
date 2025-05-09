import React from 'react';
import { useState } from "react";
import "./Login.css";
//import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  }); 

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    }; 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //prevents page reload
    event.preventDefault();

    // Validate inputs
    const validationErrors: { [key: string]: string } = {};

    if (!formData.username.trim()) validationErrors.username = "Username is required";
    //if (!formData.username.includes("@")) validationErrors.email = "Valid email is required";
    if (formData.password.length < 6) validationErrors.password = "Password must be at least 6 characters";
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);

      try {
        const res = await fetch('http://localhost:3003/users/login', {
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
        console.log("Error connecting to the server", error)
      }
    }
    };
      return (
        <div className="page-container">
        <div className="signup-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 

                //change value below in backend w/ state management
                //value={formData.username}
                onChange={handleChange}
                className={`form-input ${errors.email ? "input-error" : ""}`}
                />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
    
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                //change value below in backend w/ state management
                //value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "input-error" : ""}`}
                /> 
               {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            <button type="submit" className="submit-button">
              Log in
            </button>
          </form>
          <Link to="/signup">
            Create an Account
          </Link>  
        </div>
        </div>
      );
}

export default Login;








