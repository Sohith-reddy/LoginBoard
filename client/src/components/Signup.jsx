import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // Correctly initializing state
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(formData)
      })
      // console.log(response);
      if (response.ok) {
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        // <Navig</Navig>
        alert("Signed In Successfully");
        Navigate('/login');
        console.log(response);
      }
    } catch (error) {
      console.log("Error Details: ", error);
    }
    
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter the Username: </label>
          <input
            value={formData.username}
            name="username"
            placeholder="Enter the Username"
            id="username"
            onChange={handleChange}
            type="text"
            required
          />
          <label htmlFor="email">Enter Email: </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="123@eee.com"
            id="email"
            type="email"
            required
          />
          <label htmlFor="password">Enter Password: </label>
          <input
            value={formData.password}
            name="password"
            placeholder="****"
            onChange={handleChange}
            id="password"
            type="password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
