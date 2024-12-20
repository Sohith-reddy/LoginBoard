import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const URL = "http://localhost:3000/login";

const Login = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(formData);
    // alert("Login Successful");
    try {
      const response = await fetch(URL, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      })
      if (response.ok) {
        setFormData({
          email: "",
          password: "",
        });
        Navigate("/");
        console.log(formData)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Enter Email </label>
          <input type='email' value={formData.email} id='email' name='email' required onChange={handleChange}/>
          <label htmlFor='password'>Enter Password </label>
          <input type='password' value={formData.password} id='password' name='password' required onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login