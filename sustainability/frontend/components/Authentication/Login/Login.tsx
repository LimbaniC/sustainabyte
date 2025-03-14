import React from 'react';
// import { useState } from "react";
import "./Login.css";


const Login = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //implement this with backend 
        console.log(e); 

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        //implement this with backend 
        console.log(e.target.value); 

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
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>

    
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
    
    
            <button type="submit" className="submit-button">
              Log in
            </button>
          </form>
        </div>
      );
}

export default Login;








