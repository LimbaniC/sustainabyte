import React from 'react';
// import { useState } from "react";
import "./Signup.css";


const Signup = () => {

    const handleSubmit = (e: string) => {
        //implement this with backend 
        console.log(e); 

    };

    const handleChange = (e: string) => { 
        //implement this with backend 
        console.log(e); 

    }
    

    // const [formData, setFormData] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    
    //   const [errors, setErrors] = useState({});

    const dummy = "";


      return (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                //change value below in backend w/ state managment
                value={dummy}
                onChange={handleChange}
                className="form-input"
              />
            </div>
    
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                //change value below in backend w/ state management
                value={dummy}
                onChange={handleChange}
                className="form-input"
              />
            </div>
    
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                //change value below in backend w/ state management
                value={dummy}
                onChange={handleChange}
                className="form-input"
              />
            </div>
    
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                //change value below in backend w/ state managment 
                value={dummy}
                onChange={handleChange}
                className="form-input"
              />
            </div>
    
            <button type="submit" className="submit-button">
              Sign Up
            </button>
          </form>
        </div>
      );
}

export default Signup;








