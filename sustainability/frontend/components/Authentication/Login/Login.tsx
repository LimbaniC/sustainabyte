import React from 'react';
import { useState } from "react";
import "./Login.css";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); 

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Validate inputs
      const validationErrors: { [key: string]: string } = {};
  
      if (!formData.email.includes("@")) validationErrors.email = "Valid email is required";
      if (formData.password.length < 6) validationErrors.password = "Password must be at least 6 characters";
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        console.log("Login Successful:", formData);
        // Call backend API for authentication
      }
    };
    

    // const [formData, setFormData] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    
    //   const [errors, setErrors] = useState({});

  //  const dummy = "";


      return (
        <div className="signup-container">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>

    
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
            </div>
    
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
    
    
            <button type="submit" className="submit-button">
              Log in
            </button>
          </form>
        </div>
      );
}

export default Login;








