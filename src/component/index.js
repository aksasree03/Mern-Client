import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Register from './component/register';
import Home from './component/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar/>
      <h1>Web App</h1>
      <Home/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
      </Routes>
    </Router>
  </div>
);
