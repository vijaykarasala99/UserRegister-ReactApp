import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    pwd: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have an API endpoint for user authentication
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(response.data); // Assuming the response contains user data or token upon successful login
      // Perform any actions needed after successful login (e.g., show a success message)
      document.write('heloo')
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., display error message)
    }
  };

  return (
    <div style={{textAlign:'center',marginTop:'1cm'}}>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" >E-Mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
<br>
</br>
        <div>
          <label htmlFor="pwd" >Password:</label>
          <input type="password" id="pwd" name="pwd" value={formData.pwd} onChange={handleChange} required />
        </div>

        <button type="submit" style={{marginTop:'20px',color:'green'}}>Login</button>

      </form>
    </div>
    </div>
  );
}

export default LoginForm;
