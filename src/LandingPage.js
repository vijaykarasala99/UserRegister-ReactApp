import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2 style={{ color: 'green', backgroundColor: 'pink', textAlign: 'center' }}>WELCOME TO VIJAY CONSTRUCTIONS</h2>
      
      <Link to="/LoginForm" style={{ textDecoration: 'none'}}>
        <button style={{ height: '2.0rem', borderRadius: '0.5rem',backgroundColor: 'green', color: 'white', cursor: 'pointer',marginLeft:'45%'}}>
          Login
        </button>
      </Link>
      <Link to="/RegisterForm" style={{ textDecoration: 'none' }}>
        <button style={{ height: '2.0rem', borderRadius: '0.5rem', backgroundColor: 'red', color: 'white', cursor: 'pointer',marginRight:'46%' }}>
          Sign Up
        </button>
      </Link>


      <br></br><br></br>
        <img src='data:image/jpeg;base64,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'
          style={{ height: '16cm',width:'40.63cm'}} alt="vijay" />
      
    </div>
  );
};

export default LandingPage;