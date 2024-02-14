import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/RegisterForm" element={<RegisterForm/>} />
</Routes>
    </Router>
  );
};

export default App;
