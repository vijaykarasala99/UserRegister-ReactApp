import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';


function RegisterForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    familyname: '',
    dob: '',
    age: '',
    gender: '',
    mobileno: '',
    email: '',
    pwd: '',
    placeofbirth: '',
    address: '',
    profession: '',
    martialstatus: '',
    disability: '',
    time:''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signup', formData);
      console.log('Data saved successfully:', response.data);
      setRegistrationSuccess(true);
      setError(null);
      // Reset form data after successful submission if needed
      setFormData({
        fname: '',
        lname: '',
        familyname: '',
        dob: '',
        age: '',
        gender: '',
        mobileno: '',
        email: '',
        pwd: '',
        placeofbirth: '',
        address: '',
        profession: '',
        martialstatus: '',
        disability: '',
        time:''
      });
    } catch (error) {
      console.error('Error saving data:', error);
      // Set error state to display to user
      setError('Error saving data. Please try again later.');
    }
  };

  return (
    <div className='register' style={{width:"20cm",marginLeft:"10cm",marginTop:"1cm",marginBottom:"1cm", color: "white"}}>
    <div style={{backgroundImage:'url(https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',textAlign:'center', 
    backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'20cm',borderRadius:'10px'}}>
      
      <form onSubmit={handleSubmit}>
      <br/> <br/>
        <h1 style={{fontSize: "2rem"}}>Signup Form</h1>
        <br/> 
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="fname" style={{marginLeft: "-6%"}}>First Name:</label>
          <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} style={{marginLeft: "8%", marginRight: "-25%"}}/>
        </div>
        <div style={{marginLeft: "5%"}}>
          <label htmlFor="lname" style={{marginLeft: "14%"}}>Last Name:</label>
          <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} style={{marginLeft: "15%",marginRight: "-50%"}}/>
        </div>
        </div> <br/>
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="familyname">Family Name:</label>
          <input type="text" id="familyname" name="familyname" value={formData.familyname} onChange={handleChange} style={{marginLeft: "3%", marginRight: "-15%"}}/>
        </div>
        <div style={{marginLeft: "4%"}}>
          <label htmlFor="dob" style={{marginLeft: "-12%"}}>Date Of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} style={{marginLeft: "11%",marginRight: "-90%", width: "80%"}}/>
        </div>
        </div>     <br/>   
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="age" style={{marginLeft: "7%"}}>Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} style={{marginLeft: "30%", marginRight: "-45%"}}/>
        </div>
        <div style={{marginLeft: "3%"}}> 
          <label htmlFor="gender" style={{marginLeft: "28%"}}>Gender:</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} style={{marginLeft: "26%",marginRight: "-100%"}}/>
        </div>
        </div>   <br/>
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="mobileno" style={{marginLeft: "0%"}}>Mobile No:</label>
          <input type="text" id="mobileno" name="mobileno" value={formData.mobileno} onChange={handleChange} style={{marginLeft: "9%", marginRight: "-25%"}}/>
        </div>
        <div style={{marginLeft: "2%"}}>
          <label htmlFor="email" style={{marginLeft: "35%"}}>E-Mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{marginLeft: "30%",marginRight: "-70%"}}/>
        </div>
        </div>  <br/>
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="pwd" style={{marginLeft: "-8%"}}>Password:</label>
          <input type="password" id="pwd" name="pwd" value={formData.pwd} onChange={handleChange} style={{marginLeft: "13%", marginRight: "-35%"}}/>
        </div>
        <div style={{marginLeft: "5.3%"}}>
          <label htmlFor="placeofbirth" style={{marginLeft: "6%"}}>Place Of Birth:</label>
          <input type="text" id="placeofbirth" name="placeofbirth" value={formData.placeofbirth} onChange={handleChange} style={{marginLeft: "8%",marginRight: "-50%"}}/>
        </div>
        </div>  <br/>
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="address" style={{marginLeft: "7%"}}>Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} style={{marginLeft: "18%", marginRight: "-25%"}}/>
        </div>
        <div style={{marginLeft: "5.8%"}}>
          <label htmlFor="profession" style={{marginLeft: "14%"}}>Profession:</label>
          <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} style={{marginLeft: "18%",marginRight: "-60%"}}/>
        </div>
        </div>    <br/>
        <div style={{display: "flex"}}>
        <div >
          <label htmlFor="martialstatus">Martial Status:</label>
          <input type="text" id="martialstatus" name="martialstatus" value={formData.martialstatus} onChange={handleChange} style={{marginLeft: "3%", marginRight: "-15%"}}/>
        </div>
        <div style={{marginLeft: "2.6%"}}>
          <label htmlFor="disability" style={{marginLeft: "10%"}}>Disability:</label>
          <input type="text" id="disability" name="disability" value={formData.disability} onChange={handleChange} style={{marginLeft: "20%",marginRight: "-60%"}}/>
        </div>
        </div>    <br/> <br/>
        <div>
        <label htmlFor="time" style={{marginLeft: "3%"}} >Date & Time:</label>
          <input type="datetime-local" id="time" name="time" value={formData.time} onChange={handleChange} style={{marginLeft: "1.5%"}}/>
        </div>
        <br></br> 
      
      {error && <p style={{color: "yellow", fontSize: "1.5rem", fontWeight:"bold"}}>{error}</p>}
      {registrationSuccess && <p>Registration successful!</p>} <br/>
      
      <button type="submit">Register</button>
      </form>
      </div>
  </div>
  );
}
export default RegisterForm;
