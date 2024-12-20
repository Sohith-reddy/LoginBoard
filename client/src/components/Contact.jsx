import React,{useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Succesfully")
    //empty the input 
    setFormData({
      name: "",
      email: "",
      feedback:""
    })
  }
  return (
    <>
      <div className="container">
        <form action='' onSubmit={handleSubmit}>
          <label htmlFor='name'>Enter Full Name</label>
          <input type='text' value={formData.name} id='name' name='name' onChange={handleChange} required />
          <label htmlFor='email'>Enter Email</label>
          <input type='email' value={formData.email} id='email' name='email' onChange={handleChange} required />
          <label htmlFor='feedback'>Enter the Feedback</label>
          <input type='text' value={formData.feedback} id='feedback' name='feedback' onChange={handleChange} required />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact